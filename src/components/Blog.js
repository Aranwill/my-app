import { useState, useEffect} from "react";

// const Blog = () => {

//     const [recurso, setRecurso] = useState('posteos');

//     useEffect(() => {
//       console.log('Efecto Secundario')
//     }, [recurso]);
    

//     return (
//         <>
//             <div>
//                 <button onClick={() => setRecurso('posteos')}>Posteos</button>
//                 <button onClick={() => setRecurso('usuarios')}>Usuarios</button>
//                 <button onClick={() => setRecurso('comentarios')}>Comentarios</button>
//             </div>
//             <h2>{recurso}</h2>
//         </>
//     )
// };


const Blog = () => {
    

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [windowWidth])

    return (
        <>
        <div>{windowWidth} px</div>
        </>
    )

}

export default Blog;