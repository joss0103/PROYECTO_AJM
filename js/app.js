

const fetchData = async() => {
    try {
        const res = await fetch ('https://api.imgflip.com/get_memes')
        const data = await res.json()

        

        mostrarTabla(data)
    } catch (error){ 
        console.log(error)
    }
}

const mostrarTabla = (meme) => {

    

    const momo = {
        fila: meme.data.memes
        
    }
    

    const mimi = momo.fila
    
    
    
   
    

    for (const meme in mimi){
        console.log(mimi[meme])
        var motomami = mimi[meme]
        const cuerpo = document.querySelector('#cuerpotabla')
        const template = document.querySelector('#filapi').content
        const clone = template.cloneNode(true)
        const fragment = document.createDocumentFragment()
        
        clone.querySelector('.idapi').innerHTML = `${motomami.id}`
        clone.querySelector('.nombreapi').innerHTML = `${motomami.name}`
        clone.querySelector('.memeapi').setAttribute('src', motomami.url)
        clone.querySelector('.memeapi').setAttribute('width', motomami.width)
        clone.querySelector('.memeapi').setAttribute('height', motomami.height)

        fragment.appendChild(clone)
        cuerpo.appendChild(fragment)
    }
}

    
   
   

