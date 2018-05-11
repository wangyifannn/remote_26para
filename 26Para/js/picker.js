$(function() {
    $(document).on("pageInit", function() {
        $("#picker-name").picker({
            toolbarTemplate: '<header class="bar bar-nav">\
      <button class="button button-link pull-right close-picker">确定</button>\
      <h1 class="title">请选择称呼</h1>\
      </header>',
            cols: [{
                    textAlign: 'center',
                    values: ['赵', '钱', '孙', '李', '周', '吴', '郑', '王']
                },
                {
                    textAlign: 'center',
                    values: ['杰伦', '磊', '明', '小鹏', '燕姿', '菲菲', 'Baby']
                },
                {
                    textAlign: 'center',
                    values: ['先生', '小姐']
                }
            ]
        });
    });
    $.init();
});