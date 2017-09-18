function Character() {
    this.faces = [
        'l_f_moe_01.png',
        'l_f_moe_02.png',
        'l_f_moe_03.png',
        'l_f_moe_04.png',
        'l_f_moe_05_a.png',
        'l_f_moe_05_b.png',
        'l_f_moe_06.png',
        'l_f_moe_07_a.png',
        'l_f_moe_07_b.png',
        'l_f_moe_08.png',
        'l_f_moe_09.png',
        'l_f_moe_10.png',
        'l_f_moe_11.png'
    ];

    this.init = function(){
        this.hide();
        this.initArrowControls();
        this.show();
    }

    this.initArrowControls = function(){
        $this = this;
        $(document).keydown(function(e){
            if(e.which === 39){
                $this.nextFace();
            }else if(e.which === 37){
                $this.prevFace();
            }else{
                return;
            }
        });
    };

    this.nextFace = function(){
        var $char_face = $('.character .face');
        var img_code = $char_face.attr('src').split('/');
        var img_path = img_code[img_code.length-1];
        var cur_index = (this.faces.indexOf(img_path) + 1) < this.faces.length ? this.faces.indexOf(img_path) + 1 : 0;
        img_code[img_code.length-1] = this.faces[cur_index];
        $char_face.attr('src', img_code.join('/'));
    };

    this.prevFace = function(){
        var $char_face = $('.character .face');
        var img_code = $char_face.attr('src').split('/');
        var img_path = img_code[img_code.length-1];
        var cur_index = this.faces.indexOf(img_path) > 0 ? this.faces.indexOf(img_path)-1 : this.faces.length-1;
        img_code[img_code.length-1] = this.faces[cur_index];
        $char_face.attr('src', img_code.join('/'));
    };

    this.show = function(){
        $('.character_block').show();
    };

    this.hide = function(){
        $('.character_block').hide();
    };
}