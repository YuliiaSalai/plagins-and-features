let fruits = [
    {id:1, title:'Apples', price:20, img: 'https://snaped.fns.usda.gov/sites/default/files/styles/crop_ratio_7_5/public/seasonal-produce/2018-05/apples_2.jpg?h=65b39431&itok=MoJheg5x'},
    {id:2, title:'Oranges', price:30, img: 'https://images-prod.healthline.com/hlcmsresource/images/AN_images/benefits-of-oranges-1296x728-feature.jpg'},
    {id:3, title:'Mango', price:40, img: 'https://gfx.zdrowie.radiozet.pl/var/radiozetzdrowie/storage/images/w-zdrowym-ciele/zdrowe-zywienie/produkty/mango-owoc-jak-jesc-wartosci-odzywcze-na-zmarszczki/2946781-1-pol-PL/Mango-to-owoc-bogow-.-Jak-jesc-mango_article.jpg'}
];

const priceModal = $.modal({
    title: "Product Price",
    closable: true,
    width: '400px',
    footerButtons: [
        {text: 'Ok',
        type: 'primary',
        handler(){
            priceModal.close();
        }}
    ]
});

// my homework
const toHTML = fruit =>`
<div class="col">
<div class="card">
<img src=${fruit.img} class="card-img-top" alt="..." style="height: 300px">
<div class="card-body">
  <h5 class="card-title">${fruit.title}</h5>
  <a class="btn btn-primary" data-btn="price" data-id=${fruit.id}>Show price</a>
  <a class="btn btn-danger" data-btn="remove" data-id=${fruit.id}>Delete</a>
</div>
</div>
</div>
`

function render(){
    const html = fruits.map(f=>toHTML(f)).join('');
    document.querySelector('.row').innerHTML = html;
}

render();

document.addEventListener('click', event => {
    event.preventDefault();
    const btnType = event.target.dataset.btn;
    const id = +event.target.dataset.id;
    const fruit = fruits.find(item=>item.id === id);

    if(btnType === 'price'){
        priceModal.setContent(`
        <p>Price for ${fruit.title}: <strong>${fruit.price}$</strong></p>
        `);
        priceModal.open();
    } else if (btnType === 'remove'){
        $.confirm({
            title: 'Are you sure?',
            content: `<p>You are deleting <strong>${fruit.title}</strong></p>`
        }).then(()=>{
            fruits = fruits.filter(item=>item.id !== id);
            render();
        }).catch(()=>{
            console.log('Cancel');
        })
    }
});