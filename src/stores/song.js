
import axios from 'axios';
import { defineStore } from 'pinia';

let songs = [
  { name: "Letting Go - 蔡健雅.mp3", favourite: true },
  { name: "Music灰姑娘 - 梁咏琪.mp3", favourite: true },
  { name: "人世间-电视剧《人世间》主题曲 - 雷佳.mp3" },
  { name: "光字片-《人世间》歌曲 - 周深.mp3" },
  { name: "如愿 - 王菲.mp3" },
  { name: "旺仔小乔 - 樱花树下的约定（完整版）.mp3" },
  { name: "是妈妈是女儿 - 黄绮珊,希林娜依高.mp3", favourite: true },
  { name: "桃花诺 - G.E.M.邓紫棋.mp3" },
  { name: "等你下课(with 杨瑞代) - 周杰伦,周杰伦.mp3", favourite: true },
  { name: "路过人间 - 郁可唯.mp3", favourite: true },
  { name: "飘雪(Live) - 梁玉莹.mp3" },
  { name: "飞花(Live) - 李克勤,梁玉莹.mp3" },
];
export const useSongStore = defineStore('song', {
  state: () => ({
    songsList: [],
    music: {
      musicIndex: -1,
      musicPaused: null, //是否暂停
      musicName: null, //歌名
      audio: null,
      endMin: "0", //结束分钟
      endSec: "00",//结束秒
      startMin: "0",
      startSec: "00",
      musicCurrentTime: null, //歌曲当前播放时间
      musicImg: null,
      volume: 100,//音量
      lyric: []
    }
  }),
  actions: {
    getSongsList() {
      if (localStorage.song) return
      this.songsList = songs;
    },
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
          this.music.musicPaused ? this.music.audio.play() : this.music.audio.pause();
          this.music.musicPaused = !this.music.musicPaused;
        } else {
          this.audioHook(song.name, index)
        }
      } else {
        if (this.music.audio instanceof Audio) {
          this.music.musicPaused ? this.music.audio.play() : this.music.audio.pause();
          this.music.musicPaused = !this.music.musicPaused;
        } else {
          this.audioHook(this.music.musicName || songs[0].name, this.music.musicIndex === -1 ? 0 : this.music.musicIndex);
        }
      }
    },
    audioHook(songName, index) {
      let audio = new Audio();
      audio.addEventListener('ended', this.musicEnded)
      this.music.musicName = songName;
      this.music.musicIndex = index;
      if (this.music.audio instanceof Audio) {
        this.music.audio.pause();
        this.music.audio = null;
      }

      this.music.audio = audio;
      this.music.audio.src = `/vue3-music/artist/songs/${songName}`;
      //格式化歌曲的总时长
      this.getMusicTotalTime();
      //获取歌曲当前进度
      this.getMusicCurrentTime();
      //获取歌词和海报
      // this.getMusicInfo(songName);

      this.music.musicPaused = false;
      this.music.audio.play();
    },
    //重置音乐为暂停状态
    resetMusicPaused() {
      this.music.musicPaused = true
    },
    //格式化歌曲的总时长
    getMusicTotalTime() {
      this.music.audio.oncanplay = () => {
        this.music.endMin = Math.floor(this.music.audio.duration / 60);
        this.music.endSec = Math.floor(this.music.audio.duration % 60);
        if (this.music.endSec < 10) {
          this.music.endSec = `0${this.music.endSec}`;
        }
      }
    },
    //获取歌曲当前时间并更新进度条
    getMusicCurrentTime() {
      this.music.audio.ontimeupdate = () => {
        //更新所有进度条
        this.updateProgress();
        //歌曲进度处理
        this.music.musicCurrentTime = this.music.audio.currentTime;
        this.music.startMin = Math.floor(this.music.audio.currentTime / 60);
        this.music.startSec = Math.floor(this.music.audio.currentTime % 60);
        if (this.music.startSec < 10) {
          this.music.startSec = `0${this.music.startSec}`;
        }
      }
    },
    //更新所有进度条
    updateProgress(inputValue) {
      const progressSliderList = document.querySelectorAll("#progressSlider");
      const progressSliderBoxList = document.querySelectorAll("#progressSliderBox");
      if (inputValue) {
        this.music.audio.currentTime = inputValue / 100 * this.music.audio.duration;
        [...progressSliderBoxList].forEach(item => {
          item.style.width = `${inputValue}%`;
        });
      } else {
        let progressStyleWidth = parseInt(
          (this.music.audio.currentTime / this.music.audio.duration) * 100
        );
        [...progressSliderList].forEach(item => {
          item.value = progressStyleWidth;
        });
        [...progressSliderBoxList].forEach(item => {
          item.style.width = `${progressStyleWidth}%`;
        });
      }



    },
    //音乐结束
    musicEnded() {
      //播放下一首歌
      this.playNextMusic();
    },
    playNextMusic() {
      let tempIndex = null;
      let musicListLength = this.songsList.length;
      let musicIndex = this.music.musicIndex;
      if (musicIndex + 1 >= musicListLength) {
        tempIndex = 0;
      } else {
        tempIndex = musicIndex + 1;
      }
      this.audioHook(this.songsList[tempIndex].name, tempIndex);
    },
    async getMusicInfo(songName) {
      let res = await this.qqSearchSong(songName);
      console.log(res)
    },
    //获取歌曲mid和歌词
    async qqSearchSong(songName) {
      const data = {
        comm: {
          ct: "19",
          cv: "1859",
          uin: "0",
        },
        req: {
          method: "DoSearchForQQMusicDesktop",
          module: "music.search.SearchCgiService",
          param: {
            grp: 1,
            num_per_page: 50,
            page_num: 1,
            query: songName,
            search_type: 0,
          },
        },
      };
      let qq_music_album_mid = "";
      let qq_music_song_mid = "";
      axios({ url: "https://u.y.qq.com/cgi-bin/musicu.fcg", method: "post", data }).then(
        (res) => {
          console.log(res)
          // qq_music_album_mid = res.data.req.data.body.song.list[0].album.mid;
          // qq_music_song_mid = res.data.req.data.body.song.list[0].mid;
          //获取海报
          // this.qqGetImage(qq_music_album_mid);
          // this.qqGetLyric(qq_music_song_mid);
        }
      );
    },
    //获取歌曲海报
    qqGetImage(mid, img_type = "album") {
      if (mid == null) {
        return;
      }
      let category = "";
      if (img_type === "artist") {
        category = "T001R300x300M000";
      }
      if (img_type === "album") {
        category = "T002R300x300M000";
      }
      const s = category + mid;
      const url = `https://y.gtimg.cn/music/photo_new/${s}.jpg`;
      this.songImg = url;
    },
  },
  persist: true
})
