/**
 * Created by Ark on 16.04.2017.
 */
$(document).ready(function() {
   $('a#NewTab').click(function() {
        $(this).target = "_blank";
        window.open('live.html', 'welat FM', 'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no, width=400, height=165, top=95, left=0');
        return false;
   });
   
   $('a#maximize').click(function() {
        $(this).target = "_blank";
        window.open($(this).prop('href'));
        return false;
   });
   
});
