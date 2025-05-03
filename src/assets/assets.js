import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import spotify_logo from './spotify_logo.png'
import clock_icon from './clock_icon.png'
import dark_beach from './Dark Beach.mp3'
import darkBeachLogo from './dark beach logo.jpg'
import limerenceImg from './limerence.jpg'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img6 from './img6.jpg'
import snowfallImg from './snowfall.jpg'
import img9 from './img9.jpg'
import smailface from './смайлик.png'
import ineyimg from './иней.jpg'
import yuppie from './yippee-tbh.mp3'
import ineySong from './ΔXIUS LIИK,ножевые ранения - NНΞЙ.mp3'
import gruppaKrovi from './kino-gruppa-krovi.mp3'
import mumii from './mumijj-troll-inoplanetnyjj-gost.mp3'
import spektakl from './polina-gagarina-spektakl-okonchen.mp3'
import nasNeDogo from './tatu-nas-ne-dogonjat.mp3'
import kukushka from './viktor-coj-kukushka.mp3'
import zivert from './zivert-jegoistka.mp3'
import Basta from './Баста - моя игра.mp3'
import Krid from './Егор Крид, Баста - Завтра.mp3'
import gruppaKroviImg from './группа крови.jpg'
import mumiiImg from './мумий тролль.jpg'
import spektaklImg from './Полина_Гагарина_Спектакль_окончен_обложка_.jpg'
import nasNeDogoImg from './нас не догонят.jpg'
import kukushkaImg from './кукушка.jpg'
import zivertImg from './эгоистка.jpg'
import BastaImg from './моя игра.jpeg'
import KridImg from './завтра баста.jpg'
import kis_dva from './korol-i-shut-dva-druga.mp3'
import kis_durak from './korol-i-shut-durak-i-molnija.mp3'
import kis_jaustal from './korol-i-shut-ja-ustal.mp3'
import kis_nekromant from './korol-i-shut-nekromant.mp3'
import kis_ohotnik from './korol-i-shut-okhotnik.mp3'
import kis_prygni from './korol-i-shut-prygnu-so-skaly.mp3'
import kis1 from './киш1.jpg'
import kis2 from './киш2.jpg'
import kis3 from './киш3.jpg'
import kis4 from './киш4.jpg'
import kis5 from './киш5.jpg'
import kis6 from './киш6.png'

const newMusic = []


export const assets = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    spotify_logo,
    clock_icon,
    yuppie,
    smailface,
}

export const albumsData = [
    {
        id:0,
        name: "Король и Шут",
        image: kis6,
        desc:"Список треков Король и Шут",
        bgColor:"#560a08"
    },
]

export const songsData = [
    {
        id:0,
        name: "Группа крови",
        image: gruppaKroviImg,
        file: gruppaKrovi,
        desc: 'Кино',
    },
    {
        id:1,
        name: "Инопланетный гость",
        image: mumiiImg,
        file:mumii,
        desc:"Мумий тролль",
    },
    {
        id:2,
        name: "Спектакль",
        image: spektaklImg,
        file:spektakl,
        desc:"полина гагарина",
    },
    {
        id:3,
        name: "Нас не догонят",
        image: nasNeDogoImg,
        file:nasNeDogo,
        desc:"Тату",
    },
    {
        id:4,
        name: "Кукушка",
        image: kukushkaImg,
        file:kukushka,
        desc:"Кино",
    },
    {
        id:5,
        name: "Эгоистка",
        image: zivertImg,
        file:zivert,
        desc:"Зиверт",
    },
    {
        id:6,
        name: "Моя игра",
        image: BastaImg,
        file:Basta,
        desc:"Баста",
    },
    {
        id:7,
        name: "NНΞЙ",
        image: ineyimg,
        file: ineySong,
        desc:"ΔXIUS LIИK, ножевые ранения",
    },
    {
        id:8,
        name: "Завтра",
        image: KridImg,
        file: Krid,
        desc:"Егор Крид, Баста",
    },
    {
        id:9,
        name: "Дурак и молния",
        image: kis1,
        file: kis_durak,
        desc:"Король и Шут",
    },
    {
        id:10,
        name: "Два друга",
        image: kis3,
        file: kis_dva,
        desc:"Король и Шут",
    },
    {
        id:11,
        name: "Я устал",
        image: kis4,
        file: kis_jaustal,
        desc:"Король и Шут",
    },
    {
        id:12,
        name: "Некромант",
        image: kis5,
        file: kis_nekromant,
        desc:"Король и Шут",
    },
    {
        id:13,
        name: "Охотник",
        image: kis6,
        file: kis_ohotnik,
        desc:"Король и Шут",
    },
    {
        id:14,
        name: "Прыгну со скалы",
        image: kis1,
        file: kis_prygni,
        desc:"Король и Шут",
    },
]

export const mostPopularMusic = [
    {
        id:0,
        name: "Группа крови",
        image: gruppaKroviImg,
        file: gruppaKrovi,
        desc: 'Кино',
    },
    {
        id:7,
        name: "NНΞЙ",
        image: ineyimg,
        file: ineySong,
        desc:"ΔXIUS LIИK, ножевые ранения",
    },
    {
        id:2,
        name: "Спектакль",
        image: spektaklImg,
        file:spektakl,
        desc:"полина гагарина",
    },
    {
        id:3,
        name: "Нас не догонят",
        image: nasNeDogoImg,
        file:nasNeDogo,
        desc:"Тату",
    },
    {
        id:4,
        name: "Кукушка",
        image: kukushkaImg,
        file:kukushka,
        desc:"Кино",
    },
    {
        id:6,
        name: "Моя игра",
        image: BastaImg,
        file:Basta,
        desc:"Баста",
    },
    {
        id:8,
        name: "Завтра",
        image: KridImg,
        file: Krid,
        desc:"Егор Крид, Баста",
    },
]

export const relaxedSongsData = [
    {
        id:9,
        name: "Дурак и молния",
        image: kis1,
        file: kis_durak,
        desc:"Король и Шут",
        minutes: '1',
        seconds: '54'
    },
    {
        id:10,
        name: "Два друга",
        image: kis3,
        file: kis_dva,
        desc:"Король и Шут",
        minutes: '2',
        seconds: '14'
    },
    {
        id:11,
        name: "Я устал",
        image: kis4,
        file: kis_jaustal,
        desc:"Король и Шут",
        minutes: '3',
        seconds: '48'
    },
    {
        id:12,
        name: "Некромант",
        image: kis5,
        file: kis_nekromant,
        desc:"Король и Шут",
        minutes: '2',
        seconds: '43'
    },
    {
        id:13,
        name: "Охотник",
        image: kis6,
        file: kis_ohotnik,
        desc:"Король и Шут",
        minutes: '2',
        seconds: '31'
    },
    {
        id:14,
        name: "Прыгну со скалы",
        image: kis1,
        file: kis_prygni,
        desc:"Король и Шут",
        minutes: '3',
        seconds: '12'
    },
]