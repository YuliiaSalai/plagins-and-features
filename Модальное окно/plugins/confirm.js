$.confirm = function(options){
    return new Promise((resolve,reject)=>{
        const modal = $.modal({
            title: options.title,
            width: '400px',
            content: options.content,
            closable: false,
            onClose(){
                modal.destroy();
            },
            footerButtons: [
                {text: 'Cancel',
                type: 'secondary',
                handler(){
                    modal.close();
                    reject();
                }},
                {text: 'Delete',
                type: 'danger',
                handler(){
                    modal.close();
                    resolve();
                }}
            ]
        });
        setTimeout(()=>modal.open(),100);
    })
}