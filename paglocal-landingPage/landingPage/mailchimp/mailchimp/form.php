<!--
/*
 * WIDGET MAILCHIMP BY EBRAHIM P. LEITE | www.webcreative.com.br
 */
-->

<link rel="stylesheet" href="form.css"/>
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="mailchimp.js"></script>

<form method="post" action="#" id="mailchimp-form" data-mailchimp="true">
    <div id="subscribe-content">
        <div class="input">
            <input type="text" id="subscribe-name" name="subscribe-name" placeholder="Nome">
        </div>
        <div class="input">
            <input type="text" id="subscribe-email" name="subscribe-email" placeholder="E-mail">
        </div>
        <div class="button">
            <button type="button" id="subscribe-button" class="btn_enviar" title="Quero Receber!">Quero Receber!</button>
        </div>
    </div>
    <div id="subscribe-msg"></div>
</form>