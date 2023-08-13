
import { defineStore } from 'pinia'
// let songs = [
//   { name: "Letting Go - 蔡健雅.mp3", favourite: true },
//   { name: "Music灰姑娘 - 梁咏琪.mp3", favourite: true },
//   { name: "人世间-电视剧《人世间》主题曲 - 雷佳.mp3" },
//   { name: "光字片-《人世间》歌曲 - 周深.mp3" },
//   { name: "如愿 - 王菲.mp3" },
//   { name: "旺仔小乔 - 樱花树下的约定（完整版）.mp3" },
//   { name: "是妈妈是女儿 - 黄绮珊,希林娜依高.mp3", favourite: true },
//   { name: "桃花诺 - G.E.M.邓紫棋.mp3" },
//   { name: "等你下课(with 杨瑞代) - 周杰伦,周杰伦.mp3", favourite: true },
//   { name: "路过人间 - 郁可唯.mp3", favourite: true },
//   { name: "飘雪(Live) - 梁玉莹.mp3" },
//   { name: "飞花(Live) - 李克勤,梁玉莹.mp3" },
// ];
export const useSongStore = defineStore('song', {
  state: () => ({
    songsList: [],
    music: {
      musicIndex: -1,
      musicPaused: null, //是否暂停
      musicName: null, //歌名
      audio: null,
      endMin: "0",
      endSec: "00",
      startMin: "0",
      startSec: "00",
      musicCurrentTime: 0,
      musicImg: null,
      volume: null,
      lyric: []
    }
  }),
  actions: {
    // getSongsList(value) {
    //   this.songsList = value;
    // },
    addLoveSong(song, index) {
      this.songsList[index].favourite = !this.songsList[index].favourite;
    },

    initAudio(song, index) {
      // this.songsList = [
      //   { name: "Letting Go - 蔡健雅.mp3", favourite: true },
      //   { name: "Music灰姑娘 - 梁咏琪.mp3", favourite: true },
      //   { name: "人世间-电视剧《人世间》主题曲 - 雷佳.mp3" },
      //   { name: "光字片-《人世间》歌曲 - 周深.mp3" },
      //   { name: "如愿 - 王菲.mp3" },
      //   { name: "旺仔小乔 - 樱花树下的约定（完整版）.mp3" },
      //   { name: "是妈妈是女儿 - 黄绮珊,希林娜依高.mp3", favourite: true },
      //   { name: "桃花诺 - G.E.M.邓紫棋.mp3" },
      //   { name: "等你下课(with 杨瑞代) - 周杰伦,周杰伦.mp3", favourite: true },
      //   { name: "路过人间 - 郁可唯.mp3", favourite: true },
      //   { name: "飘雪(Live) - 梁玉莹.mp3" },
      //   { name: "飞花(Live) - 李克勤,梁玉莹.mp3" },
      // ];
      if (song) {
        if (song.name === this.music.musicName && this.music.audio instanceof Audio) {
          this.music.musicPaused ? this.music.audio.play():this.music.audio.pause();
          this.music.musicPaused = !this.music.musicPaused;
        }else {
          this.audioHook(song.name,index)
        }
      }else {
        if(this.music.audio instanceof Audio){
          this.music.musicPaused ? this.music.audio.play():this.music.audio.pause();
          this.music.musicPaused = !this.music.musicPaused;
        }else {
          this.audioHook(this.music.musicName,this.music.musicIndex);
        }
      }
    },
    audioHook(songName,index){
      let audio = new Audio();
      this.music.musicName = songName;
      this.music.musicIndex = index;
      if(this.music.audio instanceof Audio) {
        this.music.audio.pause();
        this.music.audio = null;
      }
      this.music.audio = audio;
      this.music.audio.src = `/vue3-music/artist/songs/${songName}`;
      this.music.musicPaused = false;
      this.music.audio.play();
    },
    //重置音乐为暂停状态
    resetMusicPaused(){
      this.music.musicPaused = true
    }
  },
  persist: true
})
