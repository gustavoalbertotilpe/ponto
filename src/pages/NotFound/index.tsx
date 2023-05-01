import astronauta from '../../assets/img/astronauta.gif';

const NotFound = () => {
    return (
        <div className="flex h-screen items-center justify-center bg-black">
            <div className='flex-column items-center justify-center'>
               <img src={astronauta} alt='gif astronauta' width='300px'/>
               <h1 className='text-center text-lg text-white'>404 | Página não encontrada!</h1>
            </div>
        </div>
    );
}

export default NotFound;
