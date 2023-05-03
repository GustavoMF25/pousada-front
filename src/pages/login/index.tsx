import BoduLogin from "@/components/login/BodyLogin";
import CardLogin from "@/components/login/CardLogin";
import InputText from "@/components/login/Input";


export default function App() {
    return (
        <BoduLogin>
            <CardLogin>
                <InputText />
                <InputText />
                <InputText />
                <InputText />
                <InputText />
                <InputText />
            </CardLogin>
        </BoduLogin>
    )
}