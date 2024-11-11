import React from "react";
import Text from "@components/atoms/Text/Text";

const ProfileSummary: React.FC = () => {
    return (
        <div className={"p-4 white"}>
            <div className={"mt-3"}>
                <div>
                    <Text size={"big"} className={"medium-weight"}>
                        👨🏽‍💻 Sobre mi
                    </Text>
                </div>

                <div className={"mt-2 lh-4 "}>
                    <Text size={"small"} className={"mt-3"}>
                        Soy un ingeniero de software con más de 8 años de experiencia, impulsado por la pasión por el
                        desarrollo de software, comprometido con la adhesión a las mejores prácticas, comprendiendo las
                        operaciones del negocio y expandiendo continuamente mi conocimiento en nuevas tecnologías y
                        patrones.
                    </Text>
                    <br/>
                    <Text size={"small"} className={"mt-3"}>
                        <b>Fun fact:</b> Este CV son en realidad componentes de React que generan dinámicamente un PDF utilizando NextJs + Puppeteer.
                        <a href="https://github.com/ramonparisg/ramonparis.dev" className={"underline"}>Ver más</a>
                    </Text>
                </div>

                <div className={"mt-4"}>
                    <Text size={"small"}>🇻🇪 Venezolano</Text>
                    <Text size={"small"} className={"mt-2"}>
                        📍 Viviendo en Chile
                    </Text>
                </div>

                <hr className={"mt-5 "}/>
                <Text size={"big"} className={"medium-weight mt-5 mb-4"}>
                    📨 Contacto
                </Text>
                <div className={"mt-2"}>
                    <Text size={"small"}>📧 pariis78@gmail.com</Text>
                    <Text size={"small"} className={"mt-2"}>
                        ☎️ +56 9 9294 9532
                    </Text>
                    <a href="https://github.com/ramonparisg" className={"underline"}>
                        <Text size={"small"} className={"mt-2"}>
                            Github: ramonparisg
                        </Text>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProfileSummary;
