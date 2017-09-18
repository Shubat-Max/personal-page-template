function CookieHandler(){
    this.setCookie = function(cname, cvalue, exp_timestamp) {
        var d = new Date();
        d.setTime(d.getTime() + (exp_timestamp));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    this.getCookie = function(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return '';
    }

    // Maintaining functions
    this.dropCookie = function(cname){
        this.setCookie(cname, '', -1);
    }
}