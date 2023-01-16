const sendMessageToScreen = (comingtext, messageside) => {
    var Message;
    Message = function(arg) {
        (this.text = arg.text), (this.message_side = arg.message_side);
        this.draw = (function(_this) {
            return function() {
                var $message;
                $message = $($(".message_template").clone().html());
                $message
                    .addClass(_this.message_side)
                    .find(".text")
                    .html(comingtext);
                $(".messages").append($message);
                return setTimeout(function() {
                    return $message.addClass("appeared");
                }, 0);
            };
        })(this);
        return this;
    };
    $(function() {
        var getMessageText, message_side, sendMessage;
        message_side = "right";
        getMessageText = function() {
            var $message_input;
            $message_input = $(".message_input");
            return comingtext;
        };
        sendMessage = function(text) {
            var $messages, message;
            if (text.trim() === "") {
                return;
            }
            $(".message_input").val("");
            $messages = $(".messages");
            // message_side = message_side === "left" ? "right" : "left";
            message = new Message({
                text: comingtext,
                message_side: messageside,
            });
            message.draw();
            return $messages.animate({
                    scrollTop: $messages.prop("scrollHeight"),
                },
                300
            );
        };
        sendMessage(getMessageText());

    });

}