let cube = document.querySelector('#cube');
        let sides = document.querySelectorAll('.side');
        const changeSide = function(event){
            if(event.target.classList.contains('sideRight')){
                cube.style.transform = 'rotateY(-60deg)';
                cube.style.transition = '1s';
            }
            else if(event.target.classList.contains('sideLeft')){
                cube.style.transform = 'rotateY(60deg)';
                cube.style.transition = '1s';
            }
            else if(event.target.classList.contains('sideFront')){
                cube.style.transform = 'rotateY(0deg)';
                cube.style.transition = '1s';
            }
            else if(event.target.classList.contains('sideLeft2')){
                cube.style.transform = 'rotateY(120deg)';
                cube.style.transition = '1s';
            }
            else if(event.target.classList.contains('sideRight2')){
                cube.style.transform = 'rotateY(-120deg)';
                cube.style.transition = '1s';
            }
            else if(event.target.classList.contains('sideBack')){
                cube.style.transform = 'rotateY(-180deg)';
                cube.style.transition = '1s';
            }
        }
        cube.addEventListener('mouseover', changeSide);
        let front = document.querySelectorAll('.fronted');
        let back = document.querySelectorAll('.backed');

        for(let i=0;i<front.length;i++){
            front[i].addEventListener('click', function(){
                this.style.transform = 'perspective(600px)  rotateY(-180deg)';
                back[i].style.transform = 'perspective(600px) rotateY(0)';
            })
        }
        for(let i=0;i<back.length;i++){
            back[i].addEventListener('click', function(){
                this.style.transform = 'perspective(600px)  rotateY(180deg)';
                front[i].style.transform = 'perspective(600px) rotateY(0)';
            })
        }