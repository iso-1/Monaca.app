function addTodo(camera_url) {
     var title = $("#todo-title").val();
     var body = $("#todo-body").val();
     var img_tag = "";
     if (camera_url) {
         img_tag = "<img src='" + camera_url + "'>";
     }
     $.mobile.changePage($("#list-page"));
     $("#todo-list").append("<li>" + img_tag + "<h3>" + title + "</h3><p>" + body + "</p></li>")
     $("#todo-list").listview('refresh');
     $('#timer').yycountdown({endDateTime:'2018/11/24 00:00:00'});
};






var strDate = $("date-deadline").text();  // HTMLフォームの文字列
var date = new Date(strDate);  // 日付
var jsonDate = JSON.stringify(date); // JSON形式

