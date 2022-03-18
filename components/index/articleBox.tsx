
interface ArticleBoxInterface {
    ImageUrl: string,
    ImageAlt: string,
    Title: string,
    Mainbody: string,
    ButtonName: string,
    ButtonOnClick: () => void,
}

const ArticleBox = ({Title, Mainbody, ImageUrl, ImageAlt, ButtonName, ButtonOnClick} : ArticleBoxInterface) => {
    return (
        <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-Cool-Gray max-w-sm">
                <a href="#!">
                    <img className="rounded-t-lg" src={ImageUrl} alt={ImageAlt}/>
                </a>
                <div className="p-6">
                    <h5 className="text-white text-xl font-medium mb-2">{Title}</h5>
                    <p className="text-white text-base mb-4">{Mainbody}</p>
                    <button  type="button" className=" inline-block px-6 py-2.5 bg-Ebony text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={ButtonOnClick}> {ButtonName} </button>
                </div>
            </div>
        </div>
    )
}

export default ArticleBox;