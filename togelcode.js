_dom = 0
_dom = document.all ? 3 : document.getElementById ? 1 : document.layers ? 2 : 0
function test(a, b) {
  if (_dom == 3 || (_dom == 1 && navigator.userAgent.indexOf("Opera/") == 0)) {
    if (
      (event.keyCode >= 48 && event.keyCode <= 57) ||
      event.keyCode == 8 ||
      event.keyCode == 9 ||
      (event.keyCode >= 37 && event.keyCode <= 40)
    ) {
      event.returnValue = true
    } else {
      event.returnValue = false
    }
  } else {
    if ((b.charCode > 45 && b.charCode < 58) || b.charCode == 0) {
    } else {
      b.preventDefault()
      b.returnValue = false
    }
  }
}

var isNS = navigator.appName == "Netscape" ? 1 : 0
var EnableRightClick = 0
if (isNS) document.captureEvents(Event.MOUSEDOWN || Event.MOUSEUP)
function mischandler() {
  if (EnableRightClick == 1) {
    return true
  } else {
    return false
  }
}
function mousehandler(e) {
  if (EnableRightClick == 1) {
    return true
  }
  var myevent = isNS ? e : event
  var eventbutton = isNS ? myevent.which : myevent.button
  if (eventbutton == 2 || eventbutton == 3) return false
}
function keyhandler(e) {
  var myevent = isNS ? e : window.event
  if (myevent.keyCode == 96) EnableRightClick = 1
  return
}
document.oncontextmenu = mischandler
document.onkeypress = keyhandler
document.onmousedown = mousehandler
document.onmouseup = mousehandler
_dom = 0
_dom = document.all ? 3 : document.getElementById ? 1 : document.layers ? 2 : 0
function Comma(number) {
  number = "" + number
  if (number.length > 3) {
    var mod = number.length % 3
    var output = mod > 0 ? number.substring(0, mod) : ""
    for (i = 0; i < Math.floor(number.length / 3); i++) {
      if (mod == 0 && i == 0) {
        output += number.substring(mod + 3 * i, mod + 3 * i + 3)
      } else {
        output += "." + number.substring(mod + 3 * i, mod + 3 * i + 3)
      }
    }
    return output
  } else return number
}
function number_format(number) {
  var decPoint = ","
  var thousandsSep = "."
  var check = number
  var checkkoma = String(check).indexOf(".")
  if (checkkoma == -1) {
    var decimals = 0
  } else {
    var decimals = 2
  }
  decimals = decimals || 0
  number = parseFloat(number)

  if (!decPoint || !thousandsSep) {
    decPoint = "."
    thousandsSep = ","
  }

  var roundedNumber = Math.round(Math.abs(number) * ("1e" + decimals)) + ""
  var numbersString = decimals
    ? roundedNumber.slice(0, decimals * -1)
    : roundedNumber
  var decimalsString = decimals ? roundedNumber.slice(decimals * -1) : ""
  var formattedNumber = ""

  while (numbersString.length > 3) {
    formattedNumber = thousandsSep + numbersString.slice(-3) + formattedNumber
    numbersString = numbersString.slice(0, -3)
  }

  return (
    (number < 0 ? "-" : "") +
    numbersString +
    formattedNumber +
    (decimalsString ? decPoint + decimalsString : "")
  )
}

function toNumber() {
  var beliall = removecomma(document.getElementById("v4d").value)
  document.getElementById("v4d").value = Comma(beliall)
}
function removecomma(a) {
  var res = ""
  for (i = 0; i < a.length; i++) {
    if (a.substr(i, 1) == ".") {
    } else {
      res += a.substr(i, 1)
    }
  }
  return res
}
function confirmz(x) {
  x.value = removecomma(x.value)
  return true
}
function chkval(a, obj) {
  if (obj.name.slice(1, 3) == "32") {
    alert("End of Row")
  } else {
    eval(
      "document.forms.bet.r" +
        (parseInt(obj.name.slice(1, 3)) + 1) +
        "1.focus();"
    )
  }
}
function hilang() {
  document.getElementById("xxx").style.visibility = "hidden"
}

function protect(e, a) {
  var input4d = document.getElementById("r" + a + "4d")
  var input3d = document.getElementById("r" + a + "3d")
  var input2d = document.getElementById("r" + a + "2d")
  var nomor3d = document.getElementById("nomor3d" + a)
  var nomor2d = document.getElementById("nomor2d" + a)
  var inputn = document.getElementById("r" + a + "n").value
  // Protect Maximal input
  if (inputn.length == 1) {
    input2d.disabled = true
    input2d.placeholder = "2D Blkg"
    input4d.disabled = true
    input4d.placeholder = "4D"
    input3d.disabled = true
    input3d.placeholder = "3D"
    input4d.value = ""
    input3d.value = ""
  } else if (inputn.length == 2) {
    input2d.disabled = false
    input2d.placeholder = ""
    input4d.disabled = true
    input4d.placeholder = "4D"
    input3d.disabled = true
    input3d.placeholder = "3D"
    input4d.value = ""
    input3d.value = ""
    nomor3d.value = ""
    nomor2d.value = inputn
    var autobet = $("#autobet2D").val()
    if (autobet != "") {
      input2d.value = autobet
    }
    shuffle(a)
  } else if (inputn.length == 3) {
    input2d.disabled = false
    input2d.placeholder = ""
    input3d.disabled = false
    input3d.placeholder = ""
    input4d.disabled = true
    input4d.placeholder = "4D"
    input4d.value = ""
    nomor2d.value = inputn.substr(1, 2)
    nomor3d.value = inputn
    var autobet = $("#autobet3D").val()
    if (autobet != "") {
      input3d.value = autobet
    }
    shuffle(a)
  } else if (inputn.length == 4) {
    input2d.disabled = false
    input2d.placeholder = ""
    input3d.disabled = false
    input3d.placeholder = ""
    input4d.disabled = false
    input4d.placeholder = ""
    nomor2d.value = inputn.substr(2, 3)
    nomor3d.value = inputn.substr(1, 3)
    input4d.focus()
    var autobet = $("#autobet4D").val()
    if (autobet != "") {
      input4d.value = autobet
    }
    shuffle(a)
  } else if (inputn.length > 4) {
    document.getElementById("r" + a + "n").value = inputn.substr(0, 4)
    input4d.focus()
    shuffle(a)
    return false
  }
}
function IsNumeric(posisi, a) {
  if (posisi == "2d") {
    var maxsolo = document.getElementById("globalsolo2d").value
    var bet = document.getElementById("nomor2d" + a).value
    var type = document.getElementById("type").value
    var disc = 29
    if (type == "D") {
      var max = Number(10000000)
    } else {
      var max = Number()
    }
    var bayarx = document.getElementById("bayar4d" + a)
    var discx = document.getElementById("diskon4d" + a)
    var input = Number(document.getElementById("r" + a + "2d").value * 1000)
  }
  if (posisi == "3d") {
    var maxsolo = document.getElementById("globalsolo3d").value
    var bet = document.getElementById("nomor3d" + a).value
    var type = document.getElementById("type").value
    var disc = 59
    if (type == "D") {
      var max = Number(10000000)
    } else {
      var max = Number()
    }
    var bayarx = document.getElementById("bayar3d" + a)
    var discx = document.getElementById("diskon3d" + a)
    var input = Number(document.getElementById("r" + a + "3d").value * 1000)
  }
  if (posisi == "4d") {
    var maxsolo = document.getElementById("globalsolo4d").value
    var bet = document.getElementById("r" + a + "n").value
    var type = document.getElementById("type").value
    var disc = 66
    if (type == "D") {
      var max = Number(10000000)
    } else {
      var max = Number()
    }
    var bayarx = document.getElementById("bayar2d" + a)
    var discx = document.getElementById("diskon2d" + a)
    var input = Number(document.getElementById("r" + a + "4d").value * 1000)
  }

  if (bet != "" || bet != 0) {
    if (input > max) {
      alert("Nilai Bet " + posisi + " Maximal " + Comma(max))
      input = ""
      document.getElementById("r" + a + posisi).focus()
      return false
    }
    discx.value = Math.round(Number(input * (disc / 100)))
    bayarx.value = Number(input - discx.value)
  }
  shuffle(a)
  totalallbet()
}

var checkflag = "false"
function clearall() {
  var fom = document.bet /*nama form */
  //alert(fom.defaultx+"klkkk");
  var ct = document.getElementById("totalrow").value
  var field = document.bet
  checkflag = "false"
  for (var a = 11; a <= Number(ct) + 10; a++) {
    i = a
    checkflag = "false"
    document.getElementById("check" + a).value = 0
    document.getElementById("check" + a).checked = false
    var bet1 = eval("fom.r" + a + "4d")
    var bet2 = eval("fom.r" + a + "3d")
    var bet3 = eval("fom.r" + a + "2d")
    var nomor = eval("fom.r" + a + "n")
    var disc = eval("fom.r" + a + "6")
    var bay = eval("fom.r" + a + "7")
    var nomor3d = eval("fom.nomor3d" + a)
    var nomor2d = eval("fom.nomor2d" + a)
    var diskon4d = eval("fom.diskon4d" + a)
    var diskon3d = eval("fom.diskon3d" + a)
    var diskon2d = eval("fom.diskon2d" + a)
    var bayar4d = eval("fom.bayar4d" + a)
    var bayar3d = eval("fom.bayar3d" + a)
    var bayar2d = eval("fom.bayar2d" + a)

    bet1.value = ""
    bet2.value = ""
    bet3.value = ""
    nomor.value = ""
    disc.value = ""
    bay.value = ""
    nomor3d.value = ""
    nomor2d.value = ""
    diskon4d.value = ""
    diskon3d.value = ""
    diskon2d.value = ""
    bayar4d.value = ""
    bayar3d.value = ""
    bayar2d.value = ""
    bet1.disabled = true
    bet2.disabled = true
    bet3.disabled = true
  }
  totalallbet()
}
function totalallbet() {
  var row = document.getElementById("totalrow").value
  var totalduit = 0
  var totdisc = 0
  var totbayar = 0
  var num4d = 0
  var num3d = 0
  var num2d = 0
  var dis4d = 0
  var dis3d = 0
  var dis2d = 0
  for (var a = 11; a <= parseInt(row) + 10; a++) {
    totdisc = 0
    totbayar = 0
    num4d = Number(document.getElementById("bayar4d" + a).value)
    if (num4d != "" || num4d != 0) totalduit += num4d
    totbayar += num4d
    num3d = Number(document.getElementById("bayar3d" + a).value)
    if (num3d != "" || num3d != 0) totalduit += num3d
    totbayar += num3d
    num2d = Number(document.getElementById("bayar2d" + a).value)
    if (num2d != "" || num2d != 0) totalduit += num2d
    totbayar += num2d
    dis4d = Number(document.getElementById("diskon4d" + a).value)
    if (dis4d != "" || dis4d != 0) totdisc += dis4d
    dis3d = Number(document.getElementById("diskon3d" + a).value)
    if (dis3d != "" || dis3d != 0) totdisc += dis3d
    dis2d = Number(document.getElementById("diskon2d" + a).value)
    if (dis2d != "" || dis2d != 0) totdisc += dis2d

    document.getElementById("r" + a + "6").value = number_format(totdisc)
    document.getElementById("r" + a + "7").value = number_format(totbayar)
  }

  var pulus = document.getElementById("duitku").value
  if (parseInt(totalduit) > parseInt(pulus)) {
    document.getElementById("totalbet").innerHTML = "0"
    alert(
      "Total Order Rp. " +
        Comma(totalduit) +
        " \n Maaf...Dana Anda Tidak Mencukupi."
    )
    return false
  }
  document.getElementById("totalbet").innerHTML = number_format(totalduit)
}
function closeket() {
  $(".red").addClass("hide")
}

$(function () {
  $("#jumlahbet").change(function () {
    $("#myTable").html("")
    var n = 1
    var nm = 11
    var row2 = ""
    var xRow = parseInt($(this).val())
    for (var i = 0; i < parseInt($(this).val()); i++) {
      var tb = nm++
      var row =
        '<tr>\
                <td class="text-center">' +
        n++ +
        '</td>\
                <td class="text-center"><input align="center" type="text" name=r' +
        tb +
        "n id=r" +
        tb +
        'n class="rclass inputcss" onKeypress="test(this,event);" onSubmit="confirmz(this.r' +
        tb +
        '5);" Onkeyup="return protect(event,' +
        tb +
        ')" autocomplete=off></td>\
                <td class="text-center"><input align="center" type="text" name=r' +
        tb +
        "4d id=r" +
        tb +
        '4d class="inputcss" onchange="return IsNumeric(\'4d\',' +
        tb +
        ');" placeholder="4D" disabled></td>\
                <td class="text-center"><input align="center" type="text" name=r' +
        tb +
        "3d id=r" +
        tb +
        '3d class="inputcss" onchange="return IsNumeric(\'3d\',' +
        tb +
        ');" placeholder="3D" disabled></td>\
                <td class="text-center"><input align="center" type="text" name=r' +
        tb +
        "2d id=r" +
        tb +
        '2d class="inputcss" onchange="return IsNumeric(\'2d\',' +
        tb +
        ');" placeholder="2D Blkg" disabled></td>\
                <td class="text-center"><input value=0 type=text id=r' +
        tb +
        '6 class="rclass inputcss" disabled></td>\
                <td class="text-center"><input value=0 type=text id=r' +
        tb +
        '7 id="r' +
        tb +
        '7" class="rclass inputcss" disabled>\
                <td class="text-center"><input type=checkbox name="check' +
        tb +
        '" value="0" class=centang onclick="checkbb(' +
        tb +
        ',this.value);" six="1" id="check' +
        tb +
        '"></td>\
                <input type=hidden name=nomor3d' +
        tb +
        ' id="nomor3d' +
        tb +
        '">\
                <input type=hidden name=nomor2d' +
        tb +
        ' id="nomor2d' +
        tb +
        '">\
                <input type=hidden name=diskon4d' +
        tb +
        ' id="diskon4d' +
        tb +
        '">\
                <input type=hidden name=diskon3d' +
        tb +
        ' id="diskon3d' +
        tb +
        '">\
                <input type=hidden name=diskon2d' +
        tb +
        ' id="diskon2d' +
        tb +
        '">\
                <input type=hidden name=bayar4d' +
        tb +
        ' id="bayar4d' +
        tb +
        '">\
                <input type=hidden name=bayar3d' +
        tb +
        ' id="bayar3d' +
        tb +
        '">\
                <input type=hidden name=bayar2d' +
        tb +
        ' id="bayar2d' +
        tb +
        '">\
                <input type=hidden value="" name=tr' +
        tb +
        ' id="tr' +
        tb +
        '">\
                <input type=hidden value="" name="allbet' +
        tb +
        '" id="allbet' +
        tb +
        '">\
            </tr>'
      row = $(row)
      $("#myTable").append(row)

      row2 += '<span id="content4dset' + tb + '"></span>'
    }
    // id contentd4d untuk css
    $("#contentbb4d").html(row2)
    document.getElementById("totalrow").value = xRow
  })
})
$(document).ready(function () {
  var totalhist = 0
  var pasar = document.getElementById("sar").value
  $("#statistik4d").load("statistik4d.php?pasar=" + pasar)
  $("#history4d").load("history4d.php")
  var flag = 0
  $("#kirimkan").click(function () {
    var cek = document.getElementById("cekerror").value
    var fom = document.bet
    var dataString = {}
    dataString["totalrow"] = fom.totalrow.value
    dataString["sar"] = fom.pasar.value
    dataString["type"] = document.getElementById("type").value
    dataString["ganti"] = document.getElementById("ganti").value
    if (cek == 0) {
      ans = confirm("proses.???")
      if (ans) {
        var ct = document.getElementById("totalrow").value
        for (x = 11; x <= Number(ct) + 10; x++) {
          dataString["r" + x + "n"] = eval("fom.r" + x + "n.value")
          dataString["nomor3d" + x] = eval("fom.nomor3d" + x + ".value")
          dataString["nomor2d" + x] = eval("fom.nomor2d" + x + ".value")
          dataString["r" + x + "4d"] = eval("fom.r" + x + "4d.value")
          dataString["r" + x + "3d"] = eval("fom.r" + x + "3d.value")
          dataString["r" + x + "2d"] = eval("fom.r" + x + "2d.value")
          dataString["allbet" + x] = eval("fom.allbet" + x + ".value")
          dataString["tr" + x] = eval("fom.tr" + x + ".value")
        }
        if (flag == 1) {
          alert("Bet anda masih diproses !")
          return false
        }
        flag = 1
        document.getElementById("returninfo").innerHTML = "Sedang di proses!!!"
        $.ajax({
          type: "POST",
          url: "game_4d_send.php",
          data: dataString,
          success: function (data2) {
            $("#statistik4d").load("statistik4d.php?pasar=" + pasar)
            $("#history4d").load("history4d.php")
            data2 = JSON.parse(data2)
            var status = data2.status
            var note = data2.note
            if (status == "Success!") {
              $("#returninfo").html(status)
              clearall()
              if (note != "") {
                $(".red").removeClass("hide")
                $("#FailTable").html("")
                var xrow = note.split("//")
                for (var i = 1; i < xrow.length; i++) {
                  var expspa = xrow[i].split("##")
                  var row =
                    '<tr>\
                                                    <td class="text-center">' +
                    i +
                    '</td>\
                                                    <td class="text-center">' +
                    expspa[0] +
                    '</td>\
                                                    <td class="text-center">' +
                    expspa[1] +
                    "</td>"
                  row = $(row)
                  $("#FailTable").append(row)
                }
              }
            } else {
              $("#returninfo").html(status + " : " + note)
            }
          },
          error: function () {
            alert("failure")
          },
        }).done(function (data) {
          flag = 0
        })
        document.getElementById("totalbet").innerHTML = "0"
      } else {
      }
    } else {
      alert("Bet melebihi max solo, Cek Bettingan Anda")
      return false
    }
  })
})

var permArr = [],
  usedChars = []
function permute(input) {
  var i, ch
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0]
    usedChars.push(ch)
    if (input.length == 0) {
      permArr.push(usedChars.slice())
    }
    permute(input)
    input.splice(i, 0, ch)
    usedChars.pop()
  }
  return permArr
}

function sort_unique(arr) {
  arr = arr.sort(function (a, b) {
    return b * 1 - a * 1
  })
  var ret = []
  var flex = 0
  for (var i = 0; i < arr.length; i++) {
    flex = 0
    for (var a = i + 1; a <= arr.length; a++) {
      if (arr[i] == arr[a]) {
        flex = 1
        break
      }
    }
    if (flex == 0) {
      ret.push(arr[i])
    }
  }
  return ret
}

function shuffle(no) {
  document.getElementById("allbet" + no).value = ""
  document.getElementById("tr" + no).value = ""
  document.getElementById("content4dset" + no).innerHTML = ""
  var ganti = document.getElementById("ganti").value
  var checkedValue = document.getElementById("check" + no).value
  var table = document.getElementById("content4dset" + no)
  var number = document.getElementById("r" + no + "n").value
  var a = number.substr(0, 1)
  var b = number.substr(1, 1)
  var beli4d = document.getElementById("r" + no + "4d").value
  var beli3d = document.getElementById("r" + no + "3d").value
  var beli2d = document.getElementById("r" + no + "2d").value
  var betting4d = Number(beli4d * 1000)
  var betting3d = Number(beli3d * 1000)
  var betting2d = Number(beli2d * 1000)

  var disc4d = document.getElementById("unit4d").value
  if (ganti == "D") {
    var diskon4d = (betting4d * disc4d) / 100
  } else {
    var diskon4d = 0
  }
  var bayar4d = betting4d - diskon4d
  var disc3d = document.getElementById("unit3d").value
  if (ganti == "D") {
    var diskon3d = (betting3d * disc3d) / 100
  } else {
    var diskon3d = 0
  }
  var bayar3d = betting3d - diskon3d
  var disc2d = document.getElementById("unit2d").value
  if (ganti == "D") {
    var diskon2d = (betting2d * disc2d) / 100
  } else {
    var diskon2d = 0
  }
  var bayar2d = betting2d - diskon2d
  var n = 0
  var isi = ""

  //if BB CAMPURAN
  if (checkedValue == 1) {
    var result = ""
    permArr = []
    if (number.length == 2) {
      result = permute([a, b])
    } else if (number.length == 3) {
      var c = number.substr(2, 1)
      result = permute([a, b, c])
      permute([a, b])
      permute([a, c])
      permute([b, c])
    } else if (number.length == 4) {
      var c = number.substr(2, 1)
      var d = number.substr(3, 1)
      result = permute([a, b, c, d])
      permute([a, b, c])
      permute([a, b, d])
      permute([a, c, d])
      permute([b, c, d])
      permute([a, b])
      permute([a, c])
      permute([a, d])
      permute([b, c])
      permute([b, d])
      permute([c, d])
    } else if (number.length == 5) {
      var c = number.substr(2, 1)
      var d = number.substr(3, 1)
      var e = number.substr(4, 1)
      result = permute([a, b, c, d])
      permute([a, b, c, e])
      permute([a, b, d, e])
      permute([a, c, d, e])
      permute([b, c, d, e])
      permute([a, b, c])
      permute([a, b, d])
      permute([a, b, e])
      permute([a, c, d])
      permute([a, c, e])
      permute([a, d, e])
      permute([b, c, d])
      permute([b, c, e])
      permute([b, d, e])
      permute([c, d, e])
      permute([a, b])
      permute([a, c])
      permute([a, d])
      permute([a, e])
      permute([b, c])
      permute([b, d])
      permute([b, e])
      permute([c, d])
      permute([c, e])
      permute([d, e])
    } else if (number.length == 6) {
      var c = number.substr(2, 1)
      var d = number.substr(3, 1)
      var e = number.substr(4, 1)
      var f = number.substr(5, 1)
      result = permute([a, b, e, f])
      permute([a, e, c, f])
      permute([a, e, d, f])
      permute([b, e, c, f])
      permute([b, e, d, f])
      permute([e, c, d, f])
      permute([a, b, c, f])
      permute([a, c, d, f])
      permute([a, b, d, f])
      permute([b, c, d, f])
      permute([a, b, c, d])
      permute([a, b, c, e])
      permute([a, b, d, e])
      permute([a, c, d, e])
      permute([b, c, d, e])
      permute([a, b, f])
      permute([a, c, f])
      permute([a, d, f])
      permute([a, e, f])
      permute([b, c, f])
      permute([f, b, d])
      permute([f, b, e])
      permute([c, d, f])
      permute([c, e, f])
      permute([d, e, f])
      permute([a, b, c])
      permute([a, b, d])
      permute([a, b, e])
      permute([a, c, d])
      permute([a, c, e])
      permute([a, d, e])
      permute([b, c, d])
      permute([b, c, e])
      permute([b, d, e])
      permute([c, d, e])
      permute([a, b])
      permute([a, c])
      permute([a, d])
      permute([a, e])
      permute([b, c])
      permute([b, d])
      permute([b, e])
      permute([c, d])
      permute([c, e])
      permute([d, e])
      permute([a, f])
      permute([b, f])
      permute([c, f])
      permute([d, f])
      permute([e, f])
    } else if (number.length == 7) {
      var c = number.substr(2, 1)
      var d = number.substr(3, 1)
      var e = number.substr(4, 1)
      var f = number.substr(5, 1)
      var g = number.substr(6, 1)
      result = permute([a, b, c, g])
      permute([a, b, d, g])
      permute([a, b, e, g])
      permute([a, b, f, g])
      permute([a, d, c, g])
      permute([a, e, c, g])
      permute([a, f, c, g])
      permute([a, e, d, g])
      permute([a, f, d, g])
      permute([a, f, e, g])
      permute([d, b, c, g])
      permute([e, b, c, g])
      permute([f, b, c, g])
      permute([e, b, d, g])
      permute([f, b, d, g])
      permute([f, b, e, g])
      permute([e, d, c, g])
      permute([f, d, c, g])
      permute([f, c, e, g])
      permute([f, d, e, g])
      permute([a, b, e, f])
      permute([a, e, c, f])
      permute([a, e, d, f])
      permute([b, e, c, f])
      permute([b, e, d, f])
      permute([e, c, d, f])
      permute([a, b, c, f])
      permute([a, c, d, f])
      permute([a, b, d, f])
      permute([b, c, d, f])
      permute([a, b, c, d])
      permute([a, b, c, e])
      permute([a, b, d, e])
      permute([a, c, d, e])
      permute([b, c, d, e])
      permute([a, b, g])
      permute([a, c, g])
      permute([a, d, g])
      permute([a, e, g])
      permute([a, f, g])
      permute([b, c, g])
      permute([b, d, g])
      permute([b, e, g])
      permute([b, f, g])
      permute([c, d, g])
      permute([c, e, g])
      permute([c, f, g])
      permute([d, e, g])
      permute([d, f, g])
      permute([e, f, g])
      permute([a, b, f])
      permute([a, c, f])
      permute([a, d, f])
      permute([a, e, f])
      permute([b, c, f])
      permute([f, b, d])
      permute([f, b, e])
      permute([c, d, f])
      permute([c, e, f])
      permute([d, e, f])
      permute([a, b, c])
      permute([a, b, d])
      permute([a, b, e])
      permute([a, c, d])
      permute([a, c, e])
      permute([a, d, e])
      permute([b, c, d])
      permute([b, c, e])
      permute([b, d, e])
      permute([c, d, e])
      permute([a, b])
      permute([a, c])
      permute([a, d])
      permute([a, e])
      permute([b, c])
      permute([b, d])
      permute([b, e])
      permute([c, d])
      permute([c, e])
      permute([d, e])
      permute([a, f])
      permute([b, f])
      permute([c, f])
      permute([d, f])
      permute([e, f])
      permute([a, g])
      permute([b, g])
      permute([c, g])
      permute([d, g])
      permute([e, g])
      permute([f, g])
    }

    var v4d = ""
    var jmlh4d = 0
    var v3d = ""
    var jmlh3d = 0
    var v2d = ""
    var jmlh2d = 0
    var temp = ""
    var wee = 0
    var getresult = ""
    var check = ""
    var num4d = 0
    var num3d = 0
    var num2d = 0
    var num = 0
    var arr = []
    var jmlh = 0
    for (var x = 0; x < result.length; x++) {
      arr[x] = String(result[x]).replace(/,/g, "")
    }
    var pxx = sort_unique(arr)
    document.getElementById("allbet" + no).value = pxx
    for (var x = 0; x < pxx.length; x++) {
      wee++
      n = wee + 10
      temp = pxx[x]
      if (temp.length == 4) {
        v4d +=
          '<span id="tebak' +
          n +
          '">' +
          temp +
          '</span><span id="xxx' +
          n +
          '"> : </span>'
        jmlh4d++
        num4d += Number(bayar4d)
      } else if (temp.length == 3) {
        v3d +=
          '<span id="tebak' +
          n +
          '">' +
          temp +
          '</span><span id="xxx' +
          n +
          '"> : </span>'
        jmlh3d++
        num3d += Number(bayar3d)
      } else if (temp.length == 2) {
        v2d +=
          '<span id="tebak' +
          n +
          '">' +
          temp +
          '</span><span id="xxx' +
          n +
          '"> : </span>'
        jmlh2d++
        num2d += Number(bayar2d)
      }
    }
    document.getElementById("tr" + no).value = wee
    n = Number(no - 10)
    num = num4d + num3d + num2d
    jmlh = jmlh4d + jmlh3d + jmlh2d
  } else {
    document.getElementById("tr" + no).value = wee
    var allbet = ""
    if (number.length == 2) {
      jmlh4d = 0
      v4d = ""
      bayar4d = 0
      jmlh4d = 0
      num4d = 0
      jmlh3d = 0
      v3d = ""
      bayar3d = 0
      jmlh3d = 0
      num3d = 0
      jmlh2d = 1
      v2d = a + b
      num2d = Number(jmlh2d * bayar2d)
      allbet = v2d
    } else if (number.length == 3) {
      var c = number.substr(2, 1)
      jmlh4d = 0
      v4d = ""
      bayar4d = 0
      jmlh4d = 0
      num4d = 0
      jmlh3d = 1
      v3d = a + b + c
      num3d = Number(jmlh3d * bayar3d)
      jmlh2d = 1
      v2d = b + c
      num2d = Number(jmlh2d * bayar2d)
      allbet = v3d + "," + v2d
    } else if (number.length == 4) {
      var c = number.substr(2, 1)
      var d = number.substr(3, 1)
      jmlh4d = 1
      v4d = a + b + c + d
      num4d = Number(jmlh4d * bayar4d)
      jmlh3d = 1
      v3d = b + c + d
      num3d = Number(jmlh3d * bayar3d)
      jmlh2d = 1
      v2d = c + d
      num2d = Number(jmlh2d * bayar2d)
      allbet = v4d + "," + v3d + "," + v2d
    }
    n = Number(no - 10)
    num = num4d + num3d + num2d
    jmlh = jmlh4d + jmlh3d + jmlh2d
    document.getElementById("allbet" + no).value = allbet
    document.getElementById("tr" + no).value = jmlh
  }

  if (num4d != 0) {
    isi =
      '<tr class="text-center"> <td style="width: 30px;"> ' +
      jmlh4d +
      " </td> <td>" +
      v4d +
      '</td> <td id="bb4d"> ' +
      number_format(bayar4d) +
      " X " +
      jmlh4d +
      " = <FONT COLOR=#2ed4ea>" +
      number_format(num4d) +
      "</font></td> </tr>"
  }
  if (num3d != 0) {
    isi +=
      '<tr class="text-center"> <td style="width: 30px;"> ' +
      jmlh3d +
      " </td> <td>" +
      v3d +
      '</td> <td id="bb3d"> ' +
      number_format(bayar3d) +
      " X " +
      jmlh3d +
      " = <FONT COLOR=#2ed4ea>" +
      number_format(num3d) +
      "</font></td> </tr>"
  }
  if (num2d != 0) {
    isi +=
      '<tr class="text-center"> <td style="width: 30px;"> ' +
      jmlh2d +
      " </td> <td>" +
      v2d +
      '</td> <td id="bb2d"> ' +
      number_format(bayar2d) +
      " X " +
      jmlh2d +
      " = <FONT COLOR=#2ed4ea>" +
      number_format(num2d) +
      "</font></td> </tr>"
  }

  // Replace value untuk ketika bb di centang
  document.getElementById("bayar4d" + no).value = num4d
  document.getElementById("bayar3d" + no).value = num3d
  document.getElementById("bayar2d" + no).value = num2d
  document.getElementById("diskon4d" + no).value = diskon4d
  document.getElementById("diskon3d" + no).value = diskon3d
  document.getElementById("diskon2d" + no).value = diskon2d

  table.innerHTML =
    "<br>\
                        <h3>" +
    n +
    ". Nomor " +
    number +
    '</h3>\
                        <table class="table table-custom table-sortable">\
                            <thead>\
                                <tr align="center">\
                                    <td align="center" style="padding: 5px;background-color:#09819e;"><font color="#FFFFFF"><b>Jlh</b></font></td>\
                                    <td align="center" style="padding: 5px;background-color:#09819e;"><font color="#FFFFFF"><b>Tebak</b></font></td>\
                                    <td align="center" style="padding: 5px;background-color:#09819e;"><font color="#FFFFFF"><b>Bet</b></font></td>\
                                </tr>\
                            </thead>\
                            <tbody>\
                                ' +
    isi +
    '\
                                <tr class="text-center"><td style="font-weight:bold;">' +
    jmlh +
    '</td><td style="font-weight:bold;">Total</td> <td style="font-weight:bold;"><FONT COLOR=#2ed4ea>' +
    number_format(num) +
    '</font><input type="hidden" id="bayar' +
    no +
    '" value="' +
    num +
    '"> </td> </tr>\
                            </tbody>\
                        </table>'

  totalallbet()
  return getresult
}

function ceksolo(no) {
  var ok = document.getElementById("cekerror").value
  var ganti = document.getElementById("ganti").value
  var checkedValue = document.getElementById("check" + no).value
  var table = document.getElementById("content4dset" + no)
  var number = document.getElementById("r" + no + "n").value
  var a = number.substr(0, 1)
  var b = number.substr(1, 1)
  var beli4d = document.getElementById("r" + no + "4d").value
  var beli3d = document.getElementById("r" + no + "3d").value
  var beli2d = document.getElementById("r" + no + "2d").value
  var betting4d = Number(beli4d * 1000)
  var betting3d = Number(beli3d * 1000)
  var betting2d = Number(beli2d * 1000)

  var disc4d = document.getElementById("unit4d").value
  if (ganti == "D") {
    var diskon4d = (betting4d * disc4d) / 100
  } else {
    var diskon4d = 0
  }
  var bayar4d = betting4d - diskon4d

  var disc3d = document.getElementById("unit3d").value
  if (ganti == "D") {
    var diskon3d = (betting3d * disc3d) / 100
  } else {
    var diskon3d = 0
  }
  var bayar3d = betting3d - diskon3d

  var disc2d = document.getElementById("unit2d").value
  if (ganti == "D") {
    var diskon2d = (betting2d * disc2d) / 100
  } else {
    var diskon2d = 0
  }
  var bayar2d = betting2d - diskon2d
  var n = 0
  var isi = ""
  var v4d = ""
  var jmlh4d = 0
  var v3d = ""
  var jmlh3d = 0
  var v2d = ""
  var jmlh2d = 0
  var temp = ""
  var wee = 0
  var getresult = ""
  var check = ""
  var num4d = 0
  var num3d = 0
  var num2d = 0
  var num = 0
  var arr = []
  var jmlh = 0
  var totbet4d = 0
  var totbet3d = 0
  var totbet2d = 0

  if (number.length == 2) {
    jmlh4d = 0
    bayar4d = 0
    jmlh4d = 0
    num4d = 0
    jmlh3d = 0
    v3d = ""
    bayar3d = 0
    jmlh3d = 0
    num3d = 0
    jmlh2d = 1
    v2d = a + b
    num2d = Number(jmlh2d * betting2d)
  } else if (number.length == 3) {
    var c = number.substr(2, 1)
    jmlh4d = 0
    bayar4d = 0
    jmlh4d = 0
    num4d = 0
    jmlh3d = 1
    num3d = Number(jmlh3d * betting3d)
    jmlh2d = 1
    num2d = Number(jmlh2d * betting2d)
  } else if (number.length == 4) {
    var c = number.substr(2, 1)
    var d = number.substr(3, 1)
    jmlh4d = 1
    num4d = Number(jmlh4d * betting4d)
    jmlh3d = 1
    num3d = Number(jmlh3d * betting3d)
    jmlh2d = 1
    num2d = Number(jmlh2d * betting2d)
  }
  if (ok == 1) {
    var totbet4d = 0
    var totbet3d = 0
    var totbet2d = 0
  } else {
    var totbet4d = document.getElementById(number + "4d").value
    var totbet3d = document.getElementById(number + "3d").value
    var totbet2d = document.getElementById(number + "2d").value
  }
  var totbet4d = document.getElementById(number + "4d").value
  var totbet3d = document.getElementById(number + "3d").value
  var totbet2d = document.getElementById(number + "2d").value
  v4d = Number(totbet4d) + Number(num4d)
  v3d = Number(totbet3d) + Number(num3d)
  v2d = Number(totbet2d) + Number(num2d)
  document.getElementById(number + "4d").value = v4d
  document.getElementById(number + "3d").value = v3d
  document.getElementById(number + "2d").value = v2d
}

function cekmaxsolo() {
  var ct = document.getElementById("totalrow").value
  var max4d = document.getElementById("globalsolo4d").value
  var max3d = document.getElementById("globalsolo3d").value
  var max2d = document.getElementById("globalsolo2d").value
  var min4d = document.getElementById("z4dmin").value
  var min3d = document.getElementById("z3dmin").value
  var min2d = document.getElementById("z2dmin").value
  for (var a = 11; a <= Number(ct) + 10; a++) {
    var number = document.getElementById("r" + a + "n").value
    var bel4d = document.getElementById("r" + a + "4d").value
    var bel3d = document.getElementById("r" + a + "3d").value
    var bel2d = document.getElementById("r" + a + "2d").value
    var bet4d = Number(bel4d * 1000)
    var bet3d = Number(bel3d * 1000)
    var bet2d = Number(bel2d * 1000)
    var elementExists = document.getElementById(number)
    // if (bet4d < min4d) {
    //     alert("Bet " +number+" \n Minimal"+min4d);
    //     document.getElementById("cekerror").value = 1;
    //     return false;
    // }
    // if (bet3d < min3d) {
    //     alert("Bet " +number+" \n Minimal"+min3d);
    //     document.getElementById("cekerror").value = 1;
    //     return false;
    // }
    // if (bet2d < min2d) {
    //     alert("Bet " +number+" \n Minimal"+min2d);
    //     document.getElementById("cekerror").value = 1;
    //     return false;
    // }
    if ((number != "" && number != 0) || number == 00) {
      if (elementExists === null) {
        var input = document.createElement("input")
        input.setAttribute("type", "hidden")
        input.setAttribute("id", number + "4d")
        input.setAttribute("value", 0)
        var input2 = document.createElement("input")
        input2.setAttribute("type", "hidden")
        input2.setAttribute("id", number + "3d")
        input2.setAttribute("value", 0)
        var input3 = document.createElement("input")
        input3.setAttribute("type", "hidden")
        input3.setAttribute("id", number + "2d")
        input3.setAttribute("value", 0)
        document.getElementById("sementara").appendChild(input)
        document.getElementById("sementara").appendChild(input2)
        document.getElementById("sementara").appendChild(input3)
      }

      ceksolo(a)

      var ambil4d = document.getElementById(number + "4d").value
      var ambil3d = document.getElementById(number + "3d").value
      var ambil2d = document.getElementById(number + "2d").value

      if (Number(ambil4d) > max4d) {
        document.getElementById(number + "4d").value = 0
        document.getElementById(number + "3d").value = 0
        document.getElementById(number + "2d").value = 0
        document.getElementById("sementara").innerHTML = ""
        document.getElementById("cekerror").value = "1"
        alert("Bet " + number + " \n Melebihi max solo " + max4d)
        return false
      }
      if (Number(ambil3d) > max3d) {
        document.getElementById(number + "4d").value = 0
        document.getElementById(number + "3d").value = 0
        document.getElementById(number + "2d").value = 0
        document.getElementById("sementara").innerHTML = ""
        document.getElementById("cekerror").value = "1"
        alert("Bet " + number + " \n Melebihi max solo " + max3d)
        return false
      }
      if (Number(ambil2d) > max2d) {
        document.getElementById(number + "4d").value = 0
        document.getElementById(number + "3d").value = 0
        document.getElementById(number + "2d").value = 0
        document.getElementById("sementara").innerHTML = ""
        document.getElementById("cekerror").value = 1
        alert("Bet " + number + " \n Melebihi max solo " + max2d)
        return false
      }
      document.getElementById("cekerror").value = "0"
    }
  }
}

function checkbb(a, check) {
  var number = document.getElementById("r" + a + "n").value
  if (check == "0") {
    document.getElementById("check" + a).value = 1
    if (number != "") {
      shuffle(a)
    }
  } else {
    document.getElementById("check" + a).value = 0
  }
}

function checkAll(source) {
  checkboxes = $(".centang")
  for (var i = 0, n = checkboxes.length; i < n; i++) {
    checkboxes[i].checked = source.checked
    if (source.checked) {
      checkboxes[i].value = 1
    } else {
      checkboxes[i].value = 0
    }
  }
}

function submitshuffle() {
  $("#hide").show()
  document.getElementById("contentquick4d").classList.remove("hidden")
  var ct = document.getElementById("totalrow").value
  for (var a = 11; a <= Number(ct) + 10; a++) {
    var number = document.getElementById("r" + a + "n").value
    if (number.length > 1) {
      shuffle(a)
    }
  }
}

function changetype(type) {
  if (type == "A") {
    $(".formss").css("cssText", "background-color: rgb(45, 94, 45) !important;")
    document.getElementById("type").value = "A"
    document.getElementById("ganti").value = "F"
  } else if (type == "B") {
    $(".formss").css("cssText", "background-color: rgb(53, 45, 18) !important;")
    document.getElementById("type").value = "B"
    document.getElementById("ganti").value = "F"
  } else if (type == "D") {
    $(".formss").css("cssText", "background-color: #417487")
    document.getElementById("type").value = "D"
    document.getElementById("ganti").value = "D"
  }
}

var acc = document.getElementsByClassName("accordion")
var i
for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function () {
    this.classList.toggle("active")
    this.nextElementSibling.classList.toggle("show")
  }
}

var acc = document.getElementsByClassName("accordion2")
var i
for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function () {
    this.classList.toggle("active")
    this.nextElementSibling.classList.toggle("show")
  }
}
