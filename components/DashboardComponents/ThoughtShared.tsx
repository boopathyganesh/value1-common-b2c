import React from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import ThoughtForm from '../Forms/ThoughtForm'


const ThoughtShared = () => {
    return (
        <div className='flex flex-col items-center justify-center bg-dark_bg/10 w-full md:w-1/3 h-[400px] p-5 rounded-2xl gap-5 text-secondary overflow-hidden'>
            <h1 className='text-secondary font-medium text-xl '>Do you want to share any thought about Value1 as a Co-Owner?</h1>
            <p>All your thoughts were considered as a contribution for the development of Value1.</p>
            <div className='flex flex-col items-center justify-center gap-5 mt-10'>
                <Dialog >
                    <h2>Share your thoughts by clicking this button below!</h2>
                    <DialogTrigger className='p-3 text-sm text-secondary rounded-xl bg-primary font-medium'>Share</DialogTrigger>
                    <DialogContent className='w-max'>
                        <DialogHeader>
                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                            <div className='flex items-center py-3 w-full' >
                                <ThoughtForm />
                            </div>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}

export default ThoughtShared
