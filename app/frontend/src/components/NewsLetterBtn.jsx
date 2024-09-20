import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function InputWithButton() {
    return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email" className="text-black dark:text-white">Subscribe for Updates and Insights.</Label>
            <div className="flex flex-row gap-2 mt-2">
                <Input type="email" id="email" placeholder="Email" />
                <Button>Subscribe</Button>
            </div>
        </div>
    )
}
