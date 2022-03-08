function handleLoginBtn(){
    $("#loginBtn").on("click", function(event) {
        event.preventDefault();
        let email = $("#email").val();
        let password = $("#password").val();

        $.ajax({
            url: `${window.location.origin}/login`,
            method: "POST",
            data: {email: email, password: password},
            success: function(data) {
                window.location.href = "/";
            },
            error: function(err) {
                alert("입력한 이메일 또는 비밀번호가 올바르지 않습니다 다시 시도하십시오!");
            }
        })
    });
}
$(document).ready(function() {
    handleLoginBtn();
});