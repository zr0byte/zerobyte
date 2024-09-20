import { Alert, AlertDescription, AlertTitle } from "./ui/alert";


export function ResuableAlert({ icon, title, description, variant }) {
    return (
        <div>
            <Alert variant={variant}>
                {icon}
                <AlertTitle>
                    <p className="text-sm">{title}</p>
                </AlertTitle>
                <AlertDescription>
                    <p className="text-sm">
                        {description}
                    </p>
                </AlertDescription>
            </Alert>
        </div>
    )
}
