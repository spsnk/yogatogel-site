<?php


// script errors will be send to this email:
$error_mail = "salvador.paz.santos+webhookerror@gmail.com";
function run()
{

  // Config
  $config = [
    "email" => [
      "from" => "github-webhook@pridosandbox.com",
      "to" => [
        "salvador.paz.santos+yogaspec@gmail.com"
      ]
    ],
    "endpoints" => [
      [
        "repo" => "spsnk/togelspec",
        "branch" => "main",
        "action" => "Spec updated",
        "run" => "/home/pridosandbox/scripts/update-spec.sh",
        "send_email" => false
      ],
      [
        "repo" => "spsnk/yogatogel-api",
        "branch" => "main",
        "action" => "API updated",
        "run" => "/home/pridosandbox/scripts/update-api.sh",
        "send_email" => true
      ],
      [
        "repo" => "spsnk/yogatogel-site",
        "branch" => "main",
        "action" => "Frontend updated",
        "run" => "/home/pridosandbox/scripts/update-front.sh",
        "send_email" => false
      ]
    ],
    "sekyot" => "f01726d9-44b7-4392-8115-0e56a1995c06"
  ];

  $postBody = $_POST['payload'];
  $payload = json_decode($postBody);

  if (isset($config['email'])) {
    $headers = 'From: ' . $config['email']['from'] . "\r\n";
    $headers .= 'CC: ' . $payload->pusher->email . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
  }

  foreach ($config['endpoints'] as $endpoint) {
    // check if the push came from the right repository and branch
    if (
      $payload->repository->url == 'https://github.com/' . $endpoint['repo']
      && $payload->ref == 'refs/heads/' . $endpoint['branch']
    ) {

      // execute update script, and record its output
      echo "Starting deploy...";
      echo "Running " . $endpoint['run'] . "\n";
      header('Connection: close');
      header('Content-Length: ' . ob_get_length());
      ob_end_flush();
      ob_flush();
      flush();
      ob_start();
      fastcgi_finish_request();
      passthru($endpoint['run']);
      $output = ob_get_contents();
      ob_end_clean();
      // prepare and send the notification email
      // send mail to someone, and the github user who pushed the commit
      $body = '<p>The Github user <a href="https://github.com/'
        . $payload->pusher->name . '">@' . $payload->pusher->name . '</a>'
        . ' has pushed to ' . $payload->repository->url
        . ' and consequently, ' . $endpoint['action']
        . '.</p>';

      $body .= '<p>Here\'s a brief list of what has been changed:</p>';
      $body .= '<ul>';
      foreach ($payload->commits as $commit) {
        $body .= '<li>' . $commit->message . '<br />';
        $body .= '<small style="color:#999">added: <b>' . count($commit->added)
          . '</b> &nbsp; modified: <b>' . count($commit->modified)
          . '</b> &nbsp; removed: <b>' . count($commit->removed)
          . '</b> &nbsp; <a href="' . $commit->url
          . '">read more</a></small></li>';
      }
      $body .= '</ul>';
      $body .= '<p>What follows is the output of the script:</p><pre>';
      $body .= $output . '</pre>';
      $body .= '<p>Cheers, <br/>Github Webhook Endpoint</p>';
      echo $output;
      if (isset($config['email']) && $endpoint['send_email']) {
        foreach ($config['email']['to'] as $mail_to) {
          mail($mail_to, $endpoint['action'], $body, $headers);
        }
      }
      return true;
    } else {
      echo "Hmm.. that doesnt look like a valid request...";
    }
  }
}

try {
  if (!isset($_POST['payload'])) {
    echo "Works fine.";
  } else {
    run();
  }
} catch (Exception $e) {
  $msg = $e->getMessage();
  mail($error_mail, $msg, '' . $e);
}
