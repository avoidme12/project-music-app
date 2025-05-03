import {BookAudio, ListMusic} from "lucide-react";
import {albumsData, songsData} from "@/assets/assets";
import {DialogAddSong} from "@/components/DialogAddSong.tsx";

export default function DisplayDashboard(){
    let idSongList = []
    let idAlbumList = []

    const listSongs = () => {
        for(let i = 0; i < songsData.length; i++){
            idSongList.push(i)
        }
        return Math.max(idSongList.length)
    }
    const listAlbums = () => {
        for(let i = 0; i < albumsData.length; i++){
            idAlbumList.push(i)
        }
        return Math.max(idAlbumList.length)
    }

    return(
        <div className='min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-zinc-100 p-8'>
            <div className='w-full grid grid-cols-2 h-[70px]'>
                <div className='bg-zinc-800 rounded-md mx-7 flex'>
                    <div className='m-3 flex'>
                        <ListMusic size={55} className='inline mx-3' color='#0080FF'/>
                        <h1 className='font-semibold text-[35px] inline mx-3 pb-2 top-2'>Total songs: {Math.max(listSongs())}</h1>
                    </div>
                </div>
                <div className='bg-zinc-800 rounded-md mx-7'>
                    <div className='m-3 flex'>
                        <BookAudio size={50} className='inline mx-3' color='#0080FF'/>
                        <h1 className='font-semibold text-[35px] inline mx-3 pb-2 top-2'>Total albums: {Math.max(listAlbums())}</h1>
                    </div>
                </div>
            </div>
            <div className='flex ml-[95%] mt-[5%]'>
                <DialogAddSong/>
            </div>
        </div>
    )
}