{
    gl.conf.isFunction=!0;
    return(_this)=>(opt={})=>{
        opt=Object.assign({
            title:"Alert",
            content:"",
            cancelable:true,
            buttons:[
                {text:"OK"},
                {text:"Cancel",color:"gray"},
            ],
            loading:false,
            keep:!1,
            use:!1
        },opt);
        let m=new LS.Modal.new(null,!opt.use?N('div',{
            inner:[
                N('span',{
                    inner:[N("b",opt?.title?opt.title+"<br>":""),N("span",opt?.content?.trim?.())]
                }),
                N('div',{
                    inner:opt.loading?[N("div",{attr:["ls-load"]})]:opt.buttons?.map?.(b=>N('button',Object.assign({attr:["ls","fluent",b.color?"ls-"+b.color:'ls-blue'],inner:b.text},(b?.element||{})))),
                    attr:["dialog_bottom"]
                })
            ],
            attr:["ls-dialog-body","ls-modal-body"]
        }):opt.use,opt);
        m.buttonClose=(index)=>{
            m.close();
            if(opt.onclose)opt.onclose(index);
            m.invoke("button_press",index)
        }
        m.element.getAll("button").forEach((e,i)=>e.on("click",function(){m.buttonClose(i)}))
        setTimeout(()=>m.show(),20);
        return {
            element:m.element,
            close:m.hide,
            hide:m.close,
            open:m.show,
            show:m.open,
            destroy:m.destroy
        }
    }
}