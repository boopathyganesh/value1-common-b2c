'use client'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export default function EnquiryForm() {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Name:', name);
        console.log('Phone:', phone);
        console.log('Email:', email);
    };
    return (
        <form className="h-[400px]" onSubmit={handleSubmit} action="post">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl">Register Now</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" type="text" placeholder="Enter your Name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="phone">Mobile Number</Label>
                        <Input id="phone" type="number" placeholder="Enter your Mobile number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="phone">Organization Email Id</Label>
                        <Input id="email" type="email" placeholder="Enter your official Email ID" value={email} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-2">
                    <button type="submit" className="w-full bg-gold-200 text-black py-3 rounded-xl text-sm font-medium">Register Now!</button>
                    <span className="text-xs text-black-200 ">
                        By registering, your agree to our privacy policy and Terms and conditions
                    </span>
                </CardFooter>
            </Card>
        </form>

    )
}
