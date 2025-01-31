import { useState } from "react"

const Section = ({isVisible,setIsVisible, title, description }) => {
    // let [bgColor, setBgColor] = useState("white")
    let [isActive, setIsActive] = useState("d-none")
    // let [isVisible, setIsVisible] = useState(false)

    return (
        <div>
            <h1 >{title}</h1>
            {isVisible ? 
            (<button onClick={() => {
                setIsActive(isActive === "d-none" ? "d-block" : "d-none")
                // setBgColor(bgColor === "yellow" ? "white" : "yellow")
                setIsVisible(false)
            }}>hide</button>)
                :
                (<button onClick={() => {
                    setIsActive(isActive === "d-none" ? "d-block" : "d-none")
                    // setBgColor(bgColor === "yellow" ? "white" : "yellow")
                    setIsVisible(true)
                }}>show</button>)
            }

         {/* {isVisible &&  <p style={{ background: bgColor }} className={`${isActive}`} */}
         {isVisible &&  <p className={`${isActive}`}
            >{description}</p>}

        </div>
    )
}

const Instamart = () => {
    const [confisection, setConfisection] = useState("about" || "team")
    return (
        <>
            <Section isVisible={confisection === "about"} 
            setIsVisible={()=>{
              setConfisection("about") 
            }} title={"About Instamart"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"} />
            <Section isVisible={confisection==="team"} 
            setIsVisible={()=>{
                setConfisection("team" )
            }} title={"Team Instamart"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"} />

        </>
    )
}
export default Instamart