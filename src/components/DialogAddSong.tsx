import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {useState} from "react";
import axios from "axios";
import ReqStates from "@/context/ReqStates.tsx";

export function DialogAddSong() {
    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
    const [image, setImage] = useState({
        selectedDocument: {
            file: null,
        },
        selectedFile: null,
    })

    const [file, setFile] = useState({
        selectedDocument: {
            file: null,
        },
        selectedFile: null,
    })

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className='bg-black text-white font-semibold duration-300' variant="outline">Add Song</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-black">
                <DialogHeader>
                    <DialogTitle className='text-white'>Add Song</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right text-white">
                            Name
                        </Label>
                        <Input id="name" type='text' className="col-span-3 text-white" onChange={e => setName(e.target.value)}/>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="author" className="text-right text-white">
                            Author
                        </Label>
                        <Input id="author" type='text' className="col-span-3 text-white" onChange={e => setAuthor(e.target.value)}/>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="image" className="text-right text-white">
                            Image file
                        </Label>
                        <Input id="image" type='file' accept='image/*' className="col-span-3 text-white" onChange={e => {
                            const files = []
                            files.push(e.target.files.item(0))
                            setImage({
                                selectedDocument: {
                                    file: files[0],
                                },
                                selectedFile: files[0],
                            })
                            console.log(e.target.files.item(0))
                            console.log(files[0])
                        }}/>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="file" className="text-right text-white">
                            Music file
                        </Label>
                        <Input id="file" type='file' accept='audio/*' className="col-span-3 text-white" onChange={e => {
                            const files = []
                            files.push(e.target.files.item(0))
                            setFile({
                                selectedDocument: {
                                    file: files[0],
                                },
                                selectedFile: files[0],
                            })
                        }}/>
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={() => {
                        const formFile = {
                            name: name,
                            author: author,
                            image: image.selectedFile,
                            file: file.selectedFile
                        }
                        console.log(formFile)
                        ReqStates.newMusic.push(formFile)
                        console.log(ReqStates.newMusic)
                    }}>Save changes</Button>
                 </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
