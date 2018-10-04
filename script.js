$(document).ready(function() {
    //Save references to elements. Don't do DOM walks in event handlers when not needed.
    var $sendEmailEl = $('#send-email');
    var $subjectEl = $('#subject');
    var $bodyEl = $('#body');
    function updateEmailLink() {
        $sendEmailEl.attr('href', 'mailto:contact@zane.sh?' +
            'subject=' + encodeURIComponent($subjectEl.val()) +
            '&body=' + encodeURIComponent($bodyEl.val()));
        //console.log($sendEmailEl.attr('href'));
    }
    $('#subject,#body').on('input', updateEmailLink);
    updateEmailLink();
});