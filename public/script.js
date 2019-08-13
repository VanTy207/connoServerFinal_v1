$(document).ready(function () {
    var temp = 0;
    $('#qtyDecrement').click(function () {
        if (temp == 0) {
            return 0;
        }
        else {
            temp--;
            $('#inputQuality').val(temp);
        }
        console.log(temp)
    })

    $('#qtyIncrement').click(function () {
        temp++;
        $('#inputQuality').val(temp);
        console.log(temp)
    })

});