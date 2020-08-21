/*
 * WIDGET MAILCHIMP BY EBRAHIM P. LEITE | www.webcreative.com.br
 */

$(document).ready(function() {
    
    'use strict';
    
    var ajaxSubscribe = {
        obj: {
            subscribeName: $('#subscribe-name'),
            subscribeEmail: $('#subscribe-email'),
            subscribeButton: $('#subscribe-button'),
            subscribeMsg: $('#subscribe-msg'),
            subscribeContent: $("#subscribe-content"),
            dataMailchimp: $('#mailchimp-form').attr('data-mailchimp'),
            success_message: '<div class="notification_ok">Quase lá! Enviamos um link em seu e-mail para confirmar sua inscrição.</div>',
            failure_message: '<div class="notification_error">Opss! <strong>Houve um problema no processamento da sua inscrição. Tente novamente!</strong></div>',
            noticeError: '<div class="notification_error">{msg}</div>',
            noticeInfo: '<div class="notification_error">{msg}</div>',
            mailChimpAction: 'mailchimp.php'
        },
        eventLoad: function () {
            var objUse = ajaxSubscribe.obj;

            $(objUse.subscribeButton).on('click', function () {
                if (window.ajaxCalling)
                    return;
                var isMailchimp = objUse.dataMailchimp === 'true';

                if (isMailchimp) {
                    ajaxSubscribe.ajaxCall(objUse.mailChimpAction);
                } else {
                    ajaxSubscribe.ajaxCall(objUse.basicAction);
                }
            });
        },
        ajaxCall: function (action) {
            window.ajaxCalling = true;
            var objUse = ajaxSubscribe.obj;
            var messageDiv = objUse.subscribeMsg.html('').hide();
            $.ajax({
                url: action,
                type: 'POST',
                dataType: 'json',
                data: {
                    subscribeName: objUse.subscribeName.val(),
                    subscribeEmail: objUse.subscribeEmail.val()
                },
                success: function (responseData, textStatus, jqXHR) {
                    if (responseData.status) {
                        objUse.subscribeContent.fadeOut(500, function () {
                            messageDiv.html(objUse.success_message).fadeIn(500);
                        });
                    } else {
                        switch (responseData.msg) {
                            case "email-required":
                                messageDiv.html(objUse.noticeError.replace('{msg}', 'Erro! <strong>E-mail é obrigatório.</strong>'));
                                break;
                            case "email-err":
                                messageDiv.html(objUse.noticeError.replace('{msg}', 'Erro! <strong>E-mail inválido.</strong>'));
                                break;
                            case "duplicate":
                                messageDiv.html(objUse.noticeError.replace('{msg}', 'Erro! <strong>E-mail já existe.</strong>'));
                                break;
                            case "filewrite":
                                messageDiv.html(objUse.noticeInfo.replace('{msg}', 'Erro! <strong>O arquivo da lista de emails está aberto.</strong>'));
                                break;
                            case "undefined":
                                messageDiv.html(objUse.noticeInfo.replace('{msg}', 'Erro! <strong>não identificado.</strong>'));
                                break;
                            case "api-error":
                                objUse.subscribeContent.fadeOut(500, function () {
                                    messageDiv.html(objUse.failure_message);
                                });
                        }
                        messageDiv.fadeIn(500);
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert('Sem conexão');
                },
                complete: function (data) {
                    window.ajaxCalling = false;
                }
            });
        }
    };
    // Inicia ajax
    $(function () {
        ajaxSubscribe.eventLoad();
    });
});