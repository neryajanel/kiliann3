/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c9f3d7f9aeabfe854beab5ad679dd945"
  },
  {
    "url": "assets/css/0.styles.1ef26605.css",
    "revision": "02191e84ca3d2381f32623f0d3d43289"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7dfc0f53.js",
    "revision": "0757f96304a7f21484ef46bcc4b1a636"
  },
  {
    "url": "assets/js/100.2867ed65.js",
    "revision": "7c6cf2da19cdbd44bf0fef4dbf88f67c"
  },
  {
    "url": "assets/js/101.2817218d.js",
    "revision": "076a265c4fd7f4ef5e25a6e7fe5c87a9"
  },
  {
    "url": "assets/js/102.238cb873.js",
    "revision": "c8cd083df4038fed14b98e4374e38655"
  },
  {
    "url": "assets/js/103.5acce1a3.js",
    "revision": "b8053c3c77cc2af49181bf093f9c69f6"
  },
  {
    "url": "assets/js/104.415d71ad.js",
    "revision": "e86d73624ce74d7434fd1ad5582f135c"
  },
  {
    "url": "assets/js/105.10a38e38.js",
    "revision": "b001e3feaaaf717ba280c5ae25738711"
  },
  {
    "url": "assets/js/106.90951214.js",
    "revision": "5b3da36905cf8846414e290ebd45fcb6"
  },
  {
    "url": "assets/js/107.ddd2059e.js",
    "revision": "10e497dac4b4ea5090ca68ddd09a0509"
  },
  {
    "url": "assets/js/108.e2aa76ab.js",
    "revision": "facd7b166f4f300885ae09ff39e4c256"
  },
  {
    "url": "assets/js/109.d1df09a1.js",
    "revision": "ab559cfbe21b874d7aad81540aa9a36a"
  },
  {
    "url": "assets/js/11.ee82b008.js",
    "revision": "9c7c0290308ea1c0b1a88abe24d91df5"
  },
  {
    "url": "assets/js/110.c6b13435.js",
    "revision": "5cbb9ff61d900d9f844f634effe8bdf9"
  },
  {
    "url": "assets/js/111.e8623619.js",
    "revision": "3a81439bcc14155b26173e2c0bf74a69"
  },
  {
    "url": "assets/js/112.9f5eb5bc.js",
    "revision": "0c6589a5e86b1a0bcf0b80a30f528576"
  },
  {
    "url": "assets/js/113.0284213f.js",
    "revision": "40985f2ee03cf17351a7fdf5d92d5e78"
  },
  {
    "url": "assets/js/114.040c80d2.js",
    "revision": "2f26ff387472db996959e5b08ea6f9e3"
  },
  {
    "url": "assets/js/115.7db059fb.js",
    "revision": "b2bad1d02f42867e09ecd61e2f11c3dd"
  },
  {
    "url": "assets/js/116.e3cdeec3.js",
    "revision": "9933570c47fe409575f098b59d3b0b8a"
  },
  {
    "url": "assets/js/117.b43947cc.js",
    "revision": "c22725388caf79e4f8078b06b12932e5"
  },
  {
    "url": "assets/js/118.4501884c.js",
    "revision": "990fa9a3881461e44dae0845e27fd65d"
  },
  {
    "url": "assets/js/119.44e98478.js",
    "revision": "08f11b2a438fda35283f0827368f9ad7"
  },
  {
    "url": "assets/js/12.6addc1b0.js",
    "revision": "941936f044843009dc409d58b02d9539"
  },
  {
    "url": "assets/js/120.cbfd7b1f.js",
    "revision": "332468b3f5966435f40d69d37b08e370"
  },
  {
    "url": "assets/js/121.f04c7851.js",
    "revision": "d3527f039c7109ae4f9bacba176453f0"
  },
  {
    "url": "assets/js/122.7d11581c.js",
    "revision": "712229ead0fe1b06f7271344e08e9cde"
  },
  {
    "url": "assets/js/123.59f34dfe.js",
    "revision": "751dd44b0989440537cabcbed1556b87"
  },
  {
    "url": "assets/js/124.94dd9b80.js",
    "revision": "377b258bd535e321efe375f17cee4c78"
  },
  {
    "url": "assets/js/125.03037220.js",
    "revision": "7c81436bb41cc0d968b0bb400d791628"
  },
  {
    "url": "assets/js/126.8dba9c8a.js",
    "revision": "88346619d42555c982004eb8c5da6ba6"
  },
  {
    "url": "assets/js/127.3164524e.js",
    "revision": "64a8707b5360b5a5d57c542588c6d583"
  },
  {
    "url": "assets/js/128.f72872f2.js",
    "revision": "c6d1555e8fb5ef5836f80f95cd82dc2f"
  },
  {
    "url": "assets/js/129.d4a50ac3.js",
    "revision": "cbd4100721b963558941ddc4e0f9a0bb"
  },
  {
    "url": "assets/js/13.bb065f74.js",
    "revision": "6c5313f09f7dfd60d8cdd8497c159c83"
  },
  {
    "url": "assets/js/130.0995998f.js",
    "revision": "f22f8528958a8aa357708473f4e684ae"
  },
  {
    "url": "assets/js/131.c585662a.js",
    "revision": "efdd9bd9218df0fe025c493b895fbbcf"
  },
  {
    "url": "assets/js/132.b38abb74.js",
    "revision": "aa8f3baffcc10250f7bb266acee886ba"
  },
  {
    "url": "assets/js/133.b023cfb1.js",
    "revision": "f53ad919cf4592601a4457e3e9513179"
  },
  {
    "url": "assets/js/134.5e0d4bcb.js",
    "revision": "bdcbbba812dce87be227fda94389af9f"
  },
  {
    "url": "assets/js/135.37b63f2b.js",
    "revision": "566d0944926fc0cd6199300495ed5ebf"
  },
  {
    "url": "assets/js/136.343e33c6.js",
    "revision": "f0dd2ce798a9c17e0150b64ba361a000"
  },
  {
    "url": "assets/js/137.5083626e.js",
    "revision": "c20359f18a7df9df997bb24d79f11cce"
  },
  {
    "url": "assets/js/138.31e7fcab.js",
    "revision": "559a484468914ff53aa1ed5c99c6f82b"
  },
  {
    "url": "assets/js/139.ca3e18dd.js",
    "revision": "44eeaff342aa4e66fab5f4974c2fd953"
  },
  {
    "url": "assets/js/14.99b0f7c4.js",
    "revision": "13842dc7da88f38953655de68ca1d019"
  },
  {
    "url": "assets/js/140.fa42423f.js",
    "revision": "e89ef569c6367d0df613c21142871fd7"
  },
  {
    "url": "assets/js/141.8428e798.js",
    "revision": "c9de0f9d200de70747ebaf2117115ee9"
  },
  {
    "url": "assets/js/142.b5e24c5d.js",
    "revision": "c8ec2e1ec3d6643177e23eff1cb45511"
  },
  {
    "url": "assets/js/143.4e43fe2c.js",
    "revision": "9fd7c3e97ff7494a0d06fed3b3f7a5b3"
  },
  {
    "url": "assets/js/144.510b9f8a.js",
    "revision": "a4d9dd8f997a7e7d9a53460356c15712"
  },
  {
    "url": "assets/js/145.820b66bb.js",
    "revision": "5321450fd7c426d27b1e92b9a375f4cf"
  },
  {
    "url": "assets/js/146.3038d96f.js",
    "revision": "8bb82f8debb549956ea284e64665d889"
  },
  {
    "url": "assets/js/147.e597f8b1.js",
    "revision": "41dac5b889a13add328370b3792d444b"
  },
  {
    "url": "assets/js/148.260478e5.js",
    "revision": "57ba8f6ac1ee8fb484a49417b2070baf"
  },
  {
    "url": "assets/js/149.cc81296a.js",
    "revision": "177578a2840a53f6c7a6202d5163f290"
  },
  {
    "url": "assets/js/15.4f9e711f.js",
    "revision": "0de14891491e34f45e3c43582f9021b7"
  },
  {
    "url": "assets/js/150.7a1c4147.js",
    "revision": "46d19265808106cbad6870c87f22d73d"
  },
  {
    "url": "assets/js/151.b2b8ce69.js",
    "revision": "f045514eef892c10f3fa4ef6a2e87e8a"
  },
  {
    "url": "assets/js/152.5923e057.js",
    "revision": "9ebe8bb2556ec4c5488738753eeedbb1"
  },
  {
    "url": "assets/js/153.1ac77de1.js",
    "revision": "c94d9b5d9e4119f1a47b683f850c315a"
  },
  {
    "url": "assets/js/154.df2b16eb.js",
    "revision": "a6bc7831b78514c1ba3039f8d7b3f9a2"
  },
  {
    "url": "assets/js/155.0baa0586.js",
    "revision": "0f699f0f3fcfd3ccf92f33aac3bcdc17"
  },
  {
    "url": "assets/js/156.e01eb9d1.js",
    "revision": "240ed83b8b2cbf89764ec183d02e30eb"
  },
  {
    "url": "assets/js/157.c47d3b63.js",
    "revision": "75b8e1ca02901d3f923e66142aa8f022"
  },
  {
    "url": "assets/js/158.bbf00afa.js",
    "revision": "7a894e3643d7b693f7bf8b3655c34ba7"
  },
  {
    "url": "assets/js/159.3b740395.js",
    "revision": "7093cf273b6020495567b58f9a4b2219"
  },
  {
    "url": "assets/js/16.576f97be.js",
    "revision": "b23020a69ee08a2f3c98c51757969b7b"
  },
  {
    "url": "assets/js/160.e5587afb.js",
    "revision": "e6589129c3e15637ffa14f263a3f46e3"
  },
  {
    "url": "assets/js/161.761261a7.js",
    "revision": "556f8a7617ac8a0d9d3df2d7bdc0d2cb"
  },
  {
    "url": "assets/js/162.8fb57d9e.js",
    "revision": "b6f29edf0d0cd1662fd41299240b699c"
  },
  {
    "url": "assets/js/163.99b23f68.js",
    "revision": "a9ee719639fb7b48e05e12a35c74d1db"
  },
  {
    "url": "assets/js/164.f22a8113.js",
    "revision": "99fe872c0babca48813ad362001fff5f"
  },
  {
    "url": "assets/js/165.a91a84e1.js",
    "revision": "acde0950c36aac914e2aea233eac4400"
  },
  {
    "url": "assets/js/166.dc5241b7.js",
    "revision": "2796a89bdb4129a8f7bb66c268e60769"
  },
  {
    "url": "assets/js/167.dffea1bb.js",
    "revision": "a7de0cad0dff4d8174d358fbc846c9b6"
  },
  {
    "url": "assets/js/168.e4dff390.js",
    "revision": "7ddea45b5c6fc2dabde3c4a90762a3b7"
  },
  {
    "url": "assets/js/169.b7905800.js",
    "revision": "f64025966d49c0c133fea3ae709c9c75"
  },
  {
    "url": "assets/js/17.89f786b6.js",
    "revision": "24c2e0977dc47538d24953daf3053856"
  },
  {
    "url": "assets/js/170.7d4e23f0.js",
    "revision": "e19c3a4331a07ea6bca1559152f7bfb0"
  },
  {
    "url": "assets/js/171.43aa5381.js",
    "revision": "5e64d295e6120ab4ceee9bcbc8ea0812"
  },
  {
    "url": "assets/js/172.827a16dc.js",
    "revision": "931e50be3da6553cac4c85dd437961fd"
  },
  {
    "url": "assets/js/173.7901674f.js",
    "revision": "469ca7524c871ba00eb085d61a9846e2"
  },
  {
    "url": "assets/js/174.a3bb5636.js",
    "revision": "bc1c79b6aeed92ddd82e12fb82bb7486"
  },
  {
    "url": "assets/js/175.ce43dc45.js",
    "revision": "71775235ee46af2b5c1a50df282f30e2"
  },
  {
    "url": "assets/js/176.29a76907.js",
    "revision": "075fa58eb18c65aba234509481be76a1"
  },
  {
    "url": "assets/js/177.9024fcf9.js",
    "revision": "66790f726b7faaf2e9ffe1a48b4cdce1"
  },
  {
    "url": "assets/js/178.a214a4f5.js",
    "revision": "3d1351bda30fc885fbb1de387a41b590"
  },
  {
    "url": "assets/js/179.78d7e15b.js",
    "revision": "81d5fff619bd258e3b5c81ebf64bbb9a"
  },
  {
    "url": "assets/js/18.e9da03c5.js",
    "revision": "50ac7a0f9ea7254119bcca9553b7ebc3"
  },
  {
    "url": "assets/js/180.22a7707b.js",
    "revision": "eeadc9c08a079eb9c1612e6b0ecd53a5"
  },
  {
    "url": "assets/js/181.bf3f26ec.js",
    "revision": "17e7092f32cfaddd86ebe5b7e2b47f2b"
  },
  {
    "url": "assets/js/182.286305f6.js",
    "revision": "bc2b16b6d26b10798a366c895e91403e"
  },
  {
    "url": "assets/js/183.21682ed9.js",
    "revision": "7eef5e661f98720f3451ae60c574395f"
  },
  {
    "url": "assets/js/184.c29284d2.js",
    "revision": "1014e6d4ee88df76e363c2a19efe77aa"
  },
  {
    "url": "assets/js/185.a11c218d.js",
    "revision": "dd2e164c4cff9d4553c13087ee8a7592"
  },
  {
    "url": "assets/js/186.d654bd8c.js",
    "revision": "959b8e3cd1170b2d28d6b8f7b2ad5c2a"
  },
  {
    "url": "assets/js/187.df339473.js",
    "revision": "7e17fb461fe478be5f34b17bc6a8f34e"
  },
  {
    "url": "assets/js/188.34a0c13a.js",
    "revision": "484355215b1086b4c589c4ec1fdbecb6"
  },
  {
    "url": "assets/js/189.5aa4ca52.js",
    "revision": "b18b169fd1b9c77afa9a20b5a706f612"
  },
  {
    "url": "assets/js/19.0440a8ac.js",
    "revision": "b393c945d18a8256361739483949abe0"
  },
  {
    "url": "assets/js/190.bfeb6fe1.js",
    "revision": "326c67a62cd71d74e0aceea5745680be"
  },
  {
    "url": "assets/js/191.eeccd564.js",
    "revision": "6b175c37fe03984781dbfa82a392b85b"
  },
  {
    "url": "assets/js/192.9ac24eab.js",
    "revision": "070d2a4595d1fed14e255f2d3d26ce3c"
  },
  {
    "url": "assets/js/193.df0bbd33.js",
    "revision": "b02e10b5495d354ab35c988ff6e7a54e"
  },
  {
    "url": "assets/js/194.86b9d3c2.js",
    "revision": "60e81f865f24617f0eb71b819b71e56d"
  },
  {
    "url": "assets/js/195.d05ab662.js",
    "revision": "c0e6120588f6d8ee8389be65ad1507dd"
  },
  {
    "url": "assets/js/196.5d8b96cf.js",
    "revision": "ba14b3fd95fe8b67829affde884de4bf"
  },
  {
    "url": "assets/js/197.e9378e3a.js",
    "revision": "54df269736c47556e3842de18ea65fe7"
  },
  {
    "url": "assets/js/198.190abbce.js",
    "revision": "b6acf1b020a83cc28892d71e8bcb3dbb"
  },
  {
    "url": "assets/js/199.d974552c.js",
    "revision": "3df2b3c2dae3e94f17cb8c7718c9b9d0"
  },
  {
    "url": "assets/js/2.526feb35.js",
    "revision": "ee72fc2084673713d637298538c1310e"
  },
  {
    "url": "assets/js/20.de9c9086.js",
    "revision": "1e16fae22b4723cd8a6e94e38951c665"
  },
  {
    "url": "assets/js/200.3eadf9e8.js",
    "revision": "3d114dc9115bba071127d3ef28fbbfd2"
  },
  {
    "url": "assets/js/201.570da240.js",
    "revision": "d178337577978e0ebb191f98ae0a6867"
  },
  {
    "url": "assets/js/202.326a909e.js",
    "revision": "e60cd4e473d8a3afc4879e48944745a9"
  },
  {
    "url": "assets/js/203.3da70bd1.js",
    "revision": "b8962695611c712d99eebead08a645f2"
  },
  {
    "url": "assets/js/204.ac56ac0e.js",
    "revision": "0c45457aa1cd56aec34af476c312e419"
  },
  {
    "url": "assets/js/205.05454106.js",
    "revision": "82941d4df461329cb1b0e718a22e618d"
  },
  {
    "url": "assets/js/206.1cf2d488.js",
    "revision": "db6e73ba2cc2a40a39f7e7b5d9d05e55"
  },
  {
    "url": "assets/js/207.de12792e.js",
    "revision": "f1b7b6f9c65b3dcbb8e141494234e096"
  },
  {
    "url": "assets/js/208.f8c1882f.js",
    "revision": "900eb69fd0ea5158d697a23e23d27b35"
  },
  {
    "url": "assets/js/209.6f59a273.js",
    "revision": "2c5a28b7375f00479c72922f911fb8aa"
  },
  {
    "url": "assets/js/21.4ca09c24.js",
    "revision": "50798fbd6b084b905871260513004488"
  },
  {
    "url": "assets/js/210.d0902bcd.js",
    "revision": "cfb58cd768666ede360bf6c2ad831aa2"
  },
  {
    "url": "assets/js/211.691c648d.js",
    "revision": "f0168279ede7631b15df1063917709c6"
  },
  {
    "url": "assets/js/212.37ee01d7.js",
    "revision": "dfca71782d61c4f8019bd5c1068c05d7"
  },
  {
    "url": "assets/js/213.92ce4658.js",
    "revision": "122fd2ed4323ca31a2eef0f10cd0453a"
  },
  {
    "url": "assets/js/214.a9d3e4dc.js",
    "revision": "9aa2ba18f5f6eb504e67828a7ac02ffa"
  },
  {
    "url": "assets/js/215.cca61ae2.js",
    "revision": "4807d8cfceb1a9c1460896da906565a1"
  },
  {
    "url": "assets/js/216.1d5a2ad3.js",
    "revision": "f71084ef3538273c6c572d80f182b284"
  },
  {
    "url": "assets/js/217.3090971e.js",
    "revision": "850f21aa8de3b0ed7133dccccd0116f4"
  },
  {
    "url": "assets/js/218.54a22677.js",
    "revision": "c9221c38d691a03b35636ba295ddf556"
  },
  {
    "url": "assets/js/219.b1f180a6.js",
    "revision": "47e5045c623f14caad5d8589eb6ae167"
  },
  {
    "url": "assets/js/22.f9ab9b58.js",
    "revision": "1194469adc23b2f1ba9f34cbc55f940d"
  },
  {
    "url": "assets/js/220.9d2fa1e0.js",
    "revision": "693478dc361f53b7c56e2ed48460d18e"
  },
  {
    "url": "assets/js/221.19a5ffba.js",
    "revision": "36f35a2ba5ca515fcb3fcc73bb04352e"
  },
  {
    "url": "assets/js/222.d694ea1c.js",
    "revision": "9a80d6ce16cc129c81450a134332afc5"
  },
  {
    "url": "assets/js/223.3ebce5eb.js",
    "revision": "ced12a4c6fcbf5614847a22d7da9d4f5"
  },
  {
    "url": "assets/js/224.a5deb8a9.js",
    "revision": "5ad48152feafaa1581d36219d181e91c"
  },
  {
    "url": "assets/js/225.7a00a60d.js",
    "revision": "0cb96d873d8a9826569d02e541ca72b9"
  },
  {
    "url": "assets/js/226.5cf0bc3d.js",
    "revision": "28971671fe7db16784e76fbfccfd91cb"
  },
  {
    "url": "assets/js/227.d55e398c.js",
    "revision": "c9b10fcf1e4f020bad65317a7de8b2b1"
  },
  {
    "url": "assets/js/228.1eeed884.js",
    "revision": "498dada7da5661c68968666cc98aa245"
  },
  {
    "url": "assets/js/229.f0f33d32.js",
    "revision": "d3d9504b5098f20076f4666c500261e9"
  },
  {
    "url": "assets/js/23.c65bcd28.js",
    "revision": "dbeb2dd4643f15f134b700461f6569aa"
  },
  {
    "url": "assets/js/230.b246004a.js",
    "revision": "12d3607324a7364c8b700eafe76113df"
  },
  {
    "url": "assets/js/231.691a4da1.js",
    "revision": "57c8c242736aa176b52e7b946611b07d"
  },
  {
    "url": "assets/js/232.6f404c55.js",
    "revision": "3eb063feb409187e67602ac1f0018529"
  },
  {
    "url": "assets/js/233.4d9b2a78.js",
    "revision": "4017b83dd969cc36071469ccf4b94346"
  },
  {
    "url": "assets/js/234.2d2f1a73.js",
    "revision": "5f06f2e564a5400cd9a9d3d5a9c3e3ff"
  },
  {
    "url": "assets/js/235.76486ff4.js",
    "revision": "46a75975a94854fd0ad364a765fd96b5"
  },
  {
    "url": "assets/js/236.4d359ab2.js",
    "revision": "7c448da3de615b6aaf12073fc15a9897"
  },
  {
    "url": "assets/js/237.0dff2d42.js",
    "revision": "3862e6f2b2ad5720d2823d2f1402e066"
  },
  {
    "url": "assets/js/238.0ccbb231.js",
    "revision": "338a66a49a008ff3f09d14dc12e40be4"
  },
  {
    "url": "assets/js/239.9727b0ab.js",
    "revision": "a2a999b67fb3aa8c6b83867cf8f4cf9a"
  },
  {
    "url": "assets/js/24.7c18d85a.js",
    "revision": "0839df0f6246c7d2072420d97bdf1e61"
  },
  {
    "url": "assets/js/240.c1430222.js",
    "revision": "77b1dc56ecffd47b70669cef8322b54c"
  },
  {
    "url": "assets/js/241.b795d900.js",
    "revision": "17a98939b61a205090341be596ae0314"
  },
  {
    "url": "assets/js/242.924ac59f.js",
    "revision": "28e1597f7d0ce5711d38b72dcbf9ca2f"
  },
  {
    "url": "assets/js/243.b854b256.js",
    "revision": "18f915d9f6aad0283552ca64247ec16f"
  },
  {
    "url": "assets/js/244.13bb021d.js",
    "revision": "9afe393786ec65c7a3531ea6b31cdccf"
  },
  {
    "url": "assets/js/245.01211c52.js",
    "revision": "7bdef942fc9cba28a3fbc0dc6b7a1b8e"
  },
  {
    "url": "assets/js/246.bb7dbe78.js",
    "revision": "202ede9fce24290e210bda4326eb0ae3"
  },
  {
    "url": "assets/js/247.2149cc10.js",
    "revision": "af866d29bcf970037d092b8f26c1b3d1"
  },
  {
    "url": "assets/js/248.1aec0689.js",
    "revision": "eb233a102ee9677a3222e160b70ebd9d"
  },
  {
    "url": "assets/js/249.d32023ff.js",
    "revision": "af9cd2e4ef6e0369dcd4b89f1f652684"
  },
  {
    "url": "assets/js/25.761dd2b9.js",
    "revision": "218180407c6533172ce1aafdf4a336b0"
  },
  {
    "url": "assets/js/250.59748b43.js",
    "revision": "a1d20b3909513f10a561de58e40eb921"
  },
  {
    "url": "assets/js/251.7e3e5efb.js",
    "revision": "25778ddd78deed96646ea3879971c65e"
  },
  {
    "url": "assets/js/252.3eac18e1.js",
    "revision": "0e977ed23ff4607377cccdcc7fb153f0"
  },
  {
    "url": "assets/js/253.a67df43b.js",
    "revision": "07b595e88da791e63b5bc1e32a5b2502"
  },
  {
    "url": "assets/js/254.897b3bd0.js",
    "revision": "a0e617baa30fc7735b247926d8e3035a"
  },
  {
    "url": "assets/js/255.3589e349.js",
    "revision": "a0f7add96bfd70fc2fa14a012bed2fc4"
  },
  {
    "url": "assets/js/256.46a18009.js",
    "revision": "0e5f3305076ddb487504b8b886816b43"
  },
  {
    "url": "assets/js/257.392888e5.js",
    "revision": "856ef23af4b6dc718d3fe16512d7da29"
  },
  {
    "url": "assets/js/258.52657b5d.js",
    "revision": "d1984aa86ce14c64b1a79d37e0443cf5"
  },
  {
    "url": "assets/js/259.407ba91e.js",
    "revision": "dacdb30f1e487ffb292f22065c2e9a2f"
  },
  {
    "url": "assets/js/26.814620f7.js",
    "revision": "69708a04a98d4a5d6bb25343c15a51e7"
  },
  {
    "url": "assets/js/260.8dd4709e.js",
    "revision": "d2a0bea84bbba2b8e4eb219a4ead2374"
  },
  {
    "url": "assets/js/261.24221b4f.js",
    "revision": "f4a5043f12d04487b20d2523511989f1"
  },
  {
    "url": "assets/js/262.6c8cfe3b.js",
    "revision": "ca53d65d2a28a6d105a54f1befaf3e14"
  },
  {
    "url": "assets/js/263.60c9c3c7.js",
    "revision": "2ecbf96c3bdfdd5bdade37d209b93435"
  },
  {
    "url": "assets/js/264.f47136d0.js",
    "revision": "6a93c3f734bc41d87ce40ec98d042581"
  },
  {
    "url": "assets/js/265.3bc05d4a.js",
    "revision": "b5d4aa519f40736d2cf30b9af8400575"
  },
  {
    "url": "assets/js/266.6c35ff68.js",
    "revision": "8a8a91c753e10794c0d8015f036cba87"
  },
  {
    "url": "assets/js/267.db218937.js",
    "revision": "0877f3c2d63c072f5c6cdf2256d501a2"
  },
  {
    "url": "assets/js/268.abf237ee.js",
    "revision": "f87d17cd9e68496b1b23ecf814c37f38"
  },
  {
    "url": "assets/js/269.e90ed225.js",
    "revision": "44893a3ecd15b3dd00e03537e82d0a4f"
  },
  {
    "url": "assets/js/27.a76dec16.js",
    "revision": "e97dbd2f8b93f5027c743d70986e5c61"
  },
  {
    "url": "assets/js/270.fe1cdd57.js",
    "revision": "e39f0617500d6ca80c1b4f5b5fef87b8"
  },
  {
    "url": "assets/js/271.ec3c37ca.js",
    "revision": "54564dd7c6534bd153aca0ac3f7ff54b"
  },
  {
    "url": "assets/js/272.9e004af1.js",
    "revision": "580c0838f6ef30df48874b9aee04a5a1"
  },
  {
    "url": "assets/js/273.da80577d.js",
    "revision": "3890de6b0aed896e231374edf1db74f9"
  },
  {
    "url": "assets/js/274.ef53a36c.js",
    "revision": "5dd8777def2cae1ff53d463eea887d93"
  },
  {
    "url": "assets/js/275.4e53ffa4.js",
    "revision": "2b96282463f2d9003251dab25dd85ee5"
  },
  {
    "url": "assets/js/276.af475f5d.js",
    "revision": "ebbeabc32ac3514d80c814dcb34bdcf1"
  },
  {
    "url": "assets/js/277.c6736291.js",
    "revision": "fce6310adbee02f51407afa9663c3b46"
  },
  {
    "url": "assets/js/278.d5442577.js",
    "revision": "b343e0f27ed8dc93fe5e42e13c47d2c3"
  },
  {
    "url": "assets/js/279.4548bea6.js",
    "revision": "d48e481ccd811b1469fcff6bfb61caed"
  },
  {
    "url": "assets/js/28.7650861e.js",
    "revision": "736a931b7e2e01034d34201ca2450614"
  },
  {
    "url": "assets/js/280.7b671743.js",
    "revision": "7616ea1f477e4d2fdae23f51addeb95d"
  },
  {
    "url": "assets/js/281.05ccbce0.js",
    "revision": "4099af4c13ad7b1f1d6356c5a42abc69"
  },
  {
    "url": "assets/js/282.bc7cb265.js",
    "revision": "4328d66188163fa2092ff24ed380da49"
  },
  {
    "url": "assets/js/283.32f86fab.js",
    "revision": "70949753f0f3a009c4126c60333a3b49"
  },
  {
    "url": "assets/js/284.9036499c.js",
    "revision": "ac746d6f6ec6c272889f4676d9999776"
  },
  {
    "url": "assets/js/285.fcdf4809.js",
    "revision": "fa4f135952d585cbc0018a429971274b"
  },
  {
    "url": "assets/js/286.3b1b2387.js",
    "revision": "3b5820ab4cf67fe97c5423a5805fd084"
  },
  {
    "url": "assets/js/287.77887396.js",
    "revision": "7d9204c34ca21ee3bde3d9238a361dd4"
  },
  {
    "url": "assets/js/288.e15fae23.js",
    "revision": "ee47f2d32cbfc746480de50965472a03"
  },
  {
    "url": "assets/js/289.0fdb46b6.js",
    "revision": "39e2ec0a74f0f5c3a11b3429317b0172"
  },
  {
    "url": "assets/js/29.6065543c.js",
    "revision": "089227a8c1dd2ae42663a19d1dffcf8f"
  },
  {
    "url": "assets/js/290.c80bb675.js",
    "revision": "c976cdc2a64abd7d4cf839330deef61f"
  },
  {
    "url": "assets/js/291.f2fddbde.js",
    "revision": "ba48c65af9af395af376e28ae0634d86"
  },
  {
    "url": "assets/js/292.5402ec1b.js",
    "revision": "edc9436b268361462755248b78d79635"
  },
  {
    "url": "assets/js/293.10487d50.js",
    "revision": "9bb3719f88ea457b79017422bcbb51a5"
  },
  {
    "url": "assets/js/294.9590e98a.js",
    "revision": "ee7b54cce5110d3092d4906f9ea0c322"
  },
  {
    "url": "assets/js/295.908305e0.js",
    "revision": "4e47db8072d0c8213f28ef104e5c1da6"
  },
  {
    "url": "assets/js/296.59d15ccd.js",
    "revision": "9735950d2ebcd15b16ebdc318e910661"
  },
  {
    "url": "assets/js/297.bde1b418.js",
    "revision": "ea5d8891643237fd428f5153284dbde7"
  },
  {
    "url": "assets/js/298.a8ecf5f0.js",
    "revision": "c22a3ecc61c33b6e66de3a89b85a9c04"
  },
  {
    "url": "assets/js/299.6a064e93.js",
    "revision": "0631acd076de40b38f10ac8591b89657"
  },
  {
    "url": "assets/js/3.173c9da2.js",
    "revision": "960cc214978188dd7ea6631d9e5e5c5b"
  },
  {
    "url": "assets/js/30.f273eea8.js",
    "revision": "c108e28ce8549f0955dff2e59bc75689"
  },
  {
    "url": "assets/js/300.10b64129.js",
    "revision": "95081f49c6853c46615f290aa2b072f6"
  },
  {
    "url": "assets/js/301.023609b7.js",
    "revision": "9459fd10be8ebbe740402c01583ac574"
  },
  {
    "url": "assets/js/302.9615c8df.js",
    "revision": "75f95a397d263bf98c85289e950425e4"
  },
  {
    "url": "assets/js/303.e9728d47.js",
    "revision": "0bf58eedeedb29957eeec7a95b57fd19"
  },
  {
    "url": "assets/js/304.2de81b19.js",
    "revision": "25f11d06c07c4102201e5a049f981a8e"
  },
  {
    "url": "assets/js/305.db80fe18.js",
    "revision": "d5dead609d77f4f49879e45649e42746"
  },
  {
    "url": "assets/js/306.9ba425db.js",
    "revision": "6642fd0f950dfb42eb44fbfcd6b75f64"
  },
  {
    "url": "assets/js/307.c6532fbe.js",
    "revision": "60f4d10a5b0ee8f920218e3a66905e7e"
  },
  {
    "url": "assets/js/308.ac64f86e.js",
    "revision": "e62ca189939302f9c7836f61ecb9f32f"
  },
  {
    "url": "assets/js/309.22a4bc3f.js",
    "revision": "85957b49a408dbdefd49393e49bf2c7e"
  },
  {
    "url": "assets/js/31.7d0c95d3.js",
    "revision": "47da713c078b3d08e38d48212c1ccf58"
  },
  {
    "url": "assets/js/310.99f9d89a.js",
    "revision": "e4b4e8d21e2ec99089cb0a930ac69e72"
  },
  {
    "url": "assets/js/311.229ee355.js",
    "revision": "61cc8b0aa9247c909a8d3473b91ef9a5"
  },
  {
    "url": "assets/js/312.a9f91e4b.js",
    "revision": "aea0045f04b05a22fd2278a8001fd102"
  },
  {
    "url": "assets/js/313.9591bc12.js",
    "revision": "b327e67aafe88d86b0f23f2c6b0eb3e2"
  },
  {
    "url": "assets/js/314.987bcdc3.js",
    "revision": "d9260853cf460d932fc0ced7d2d616e7"
  },
  {
    "url": "assets/js/315.6617c3ba.js",
    "revision": "5dccffda14a21627a573014cecaaaa1b"
  },
  {
    "url": "assets/js/316.c8ac6fe3.js",
    "revision": "7cc7e85f12ef48aaedfe277f38e031fe"
  },
  {
    "url": "assets/js/317.22bb5018.js",
    "revision": "518503a9803412bce15aeca009534ba5"
  },
  {
    "url": "assets/js/318.b3ba5f19.js",
    "revision": "b8d562ad6237f3add8bd71b8389a978c"
  },
  {
    "url": "assets/js/319.1b092a6c.js",
    "revision": "c75a03994e53c5a6f1b8b7f00ea00140"
  },
  {
    "url": "assets/js/32.0f83d644.js",
    "revision": "700fd84b244f438f3090257bb62bedca"
  },
  {
    "url": "assets/js/320.834c79ff.js",
    "revision": "4008ca0d06331b5540ed67af989a6fc7"
  },
  {
    "url": "assets/js/321.acfacb91.js",
    "revision": "2bc9fa4e7d4be43a3625c9c132b86988"
  },
  {
    "url": "assets/js/322.5f5de122.js",
    "revision": "9a3d2ba0c44c40dc2427e4d38faafa6f"
  },
  {
    "url": "assets/js/323.fafc9e40.js",
    "revision": "9724b2501cd8f602402f72f1ffbb38d2"
  },
  {
    "url": "assets/js/324.65a86631.js",
    "revision": "f4b6c2dc69a10fdc37c92497d7761ff3"
  },
  {
    "url": "assets/js/325.2eca54ab.js",
    "revision": "c3b9c7cace59d00160cb89c8c8dc8ad8"
  },
  {
    "url": "assets/js/326.ce3995b0.js",
    "revision": "cf60b2920e506d62d47060d3d926cabc"
  },
  {
    "url": "assets/js/327.4fe5ba1b.js",
    "revision": "9484ea6890d351b99e2e864c94982fa3"
  },
  {
    "url": "assets/js/328.508cf2b3.js",
    "revision": "df2585e5dd3cf572f61a084695983990"
  },
  {
    "url": "assets/js/329.504cc869.js",
    "revision": "7d9ebf3123f050f44ddccce578d36188"
  },
  {
    "url": "assets/js/33.d2f66a16.js",
    "revision": "dbe06957a8337c437b5d0f3c83989599"
  },
  {
    "url": "assets/js/330.4763c5f1.js",
    "revision": "49a16f116ea14b74bbd6cb2215533d1b"
  },
  {
    "url": "assets/js/331.f551fef6.js",
    "revision": "13d6e309c1ae78154cff088c635e180b"
  },
  {
    "url": "assets/js/332.fda41d25.js",
    "revision": "849aab13a42ff4f1f601c6053db396e2"
  },
  {
    "url": "assets/js/333.273ee837.js",
    "revision": "e375615a68effbd1b650167157d024c8"
  },
  {
    "url": "assets/js/334.00099933.js",
    "revision": "8faac9ecfcafac11f2051a7ff6554d45"
  },
  {
    "url": "assets/js/335.e7c2fd48.js",
    "revision": "fadbe7040864445be7abba429ce66dc5"
  },
  {
    "url": "assets/js/336.51adbc95.js",
    "revision": "39335490c86f502ff4651642ee6aae82"
  },
  {
    "url": "assets/js/337.c8a5c1b7.js",
    "revision": "cf3c9d30459a1c42549bb1b7b8e08a54"
  },
  {
    "url": "assets/js/338.f1f64a38.js",
    "revision": "3c20e7ce8ad5f512342705cc074221bb"
  },
  {
    "url": "assets/js/339.d4bbeb68.js",
    "revision": "1142c62f2fd79b7163c267c77efacf99"
  },
  {
    "url": "assets/js/34.93dcf4da.js",
    "revision": "a048cdac6af3b595866268a9b12e0745"
  },
  {
    "url": "assets/js/340.81824724.js",
    "revision": "105402dec108725f841985b1688cca5c"
  },
  {
    "url": "assets/js/341.48319ef7.js",
    "revision": "cc44b14a376b7494ace6f9c57ce3f590"
  },
  {
    "url": "assets/js/342.35d7cc80.js",
    "revision": "75f6ce73a97c5b4305db145b6d1bebf2"
  },
  {
    "url": "assets/js/343.6938a4bb.js",
    "revision": "39fa5c8edd0298540262f6e08413d45d"
  },
  {
    "url": "assets/js/344.c532d3e0.js",
    "revision": "4030ebaa8edd50dec7436ea45a062ece"
  },
  {
    "url": "assets/js/345.bf2cadb7.js",
    "revision": "53b4afbe49f929740c38fa176581665e"
  },
  {
    "url": "assets/js/35.3768dde7.js",
    "revision": "4598d669378ca30a52bb2e163480d8b2"
  },
  {
    "url": "assets/js/36.9a198cdb.js",
    "revision": "61247b22562dde42002cd7ecdbe8351d"
  },
  {
    "url": "assets/js/37.c5489a7b.js",
    "revision": "44b5391d5cce2cf1d60886287a6bc1f1"
  },
  {
    "url": "assets/js/38.c54f2ceb.js",
    "revision": "247511111d4f390b7d954144d655ca62"
  },
  {
    "url": "assets/js/39.e8c59d2a.js",
    "revision": "84f5b31b2b95808351f2588a545eda86"
  },
  {
    "url": "assets/js/4.f802b025.js",
    "revision": "ef80e4fa179f97c4d4c4c88fbd37db8e"
  },
  {
    "url": "assets/js/40.4a9023cb.js",
    "revision": "0e9ec4274978bd6dcf7dae199efc93e5"
  },
  {
    "url": "assets/js/41.2984b90f.js",
    "revision": "cae6c4b7918d87035acc08423314fb35"
  },
  {
    "url": "assets/js/42.cb73a487.js",
    "revision": "904d5060f147232c46954d6bbab0244e"
  },
  {
    "url": "assets/js/43.49db2c9f.js",
    "revision": "f92fbc1b0a8b9916df3237bc2aa4a9f6"
  },
  {
    "url": "assets/js/44.213eed3d.js",
    "revision": "a56f6bcbdcb54a0820d193c7dff3fe9a"
  },
  {
    "url": "assets/js/45.c5a7926a.js",
    "revision": "5152c56288e7f01e400db59fa9b7e363"
  },
  {
    "url": "assets/js/46.aa2fe8b2.js",
    "revision": "119b1ccec17fe891566d5e0c3c9486d2"
  },
  {
    "url": "assets/js/47.96991b22.js",
    "revision": "880a2885f6abfbf7cc3fef8981311f27"
  },
  {
    "url": "assets/js/48.3dae31f9.js",
    "revision": "a719bab6d23e1b8cb1e0adfca9f409be"
  },
  {
    "url": "assets/js/49.17f71a87.js",
    "revision": "9aa23167cb81a192d41201b24ea9e144"
  },
  {
    "url": "assets/js/5.df52d957.js",
    "revision": "3560103bf21b60b4abd4e7e0e2f189a1"
  },
  {
    "url": "assets/js/50.4723a08c.js",
    "revision": "fd165903d99c5d76838a604025f03ac0"
  },
  {
    "url": "assets/js/51.dd88b9d3.js",
    "revision": "005764761172a8e3487da9ef448dd470"
  },
  {
    "url": "assets/js/52.ad5e0124.js",
    "revision": "ea83ef6dd0222c5c8f67f458c48e43e5"
  },
  {
    "url": "assets/js/53.dd272e45.js",
    "revision": "7ca850f1cd5c804437eed14d0c1a686e"
  },
  {
    "url": "assets/js/54.418168d5.js",
    "revision": "62fc099f3261ba5b7a02df0e2c88b208"
  },
  {
    "url": "assets/js/55.cb17a574.js",
    "revision": "c36d09a8449b838f3ac9738fcc6bb7f9"
  },
  {
    "url": "assets/js/56.c7a3b95f.js",
    "revision": "0f7536ebd10d26cb82a68b3a6b94582d"
  },
  {
    "url": "assets/js/57.0a634005.js",
    "revision": "6f290569026d6293d6c79db4a9101935"
  },
  {
    "url": "assets/js/58.4fab1401.js",
    "revision": "875ac00a660805d88f0d09a977d850dd"
  },
  {
    "url": "assets/js/59.61579850.js",
    "revision": "07135e6fb0da06995a4e68da57273b36"
  },
  {
    "url": "assets/js/6.67634804.js",
    "revision": "fdb967af7507b72b572ba401fcfd17d2"
  },
  {
    "url": "assets/js/60.121ca0f1.js",
    "revision": "7bc0968472e4a86f34114bd6013cde24"
  },
  {
    "url": "assets/js/61.503025f4.js",
    "revision": "eb63103b8291a161f660694aa8b0ed8d"
  },
  {
    "url": "assets/js/62.bf500bfb.js",
    "revision": "39d231d3abe8dd2f98961e0f4fc89c05"
  },
  {
    "url": "assets/js/63.59da9e6b.js",
    "revision": "726b7dd69ec231eb0397d7a12ff9688b"
  },
  {
    "url": "assets/js/64.e3d37d04.js",
    "revision": "1e3395d9ae96135e5496f1a22c7fd435"
  },
  {
    "url": "assets/js/65.a153b993.js",
    "revision": "65996ce52e0193a914c41f1fb0d90c39"
  },
  {
    "url": "assets/js/66.302334f0.js",
    "revision": "ed33387c9574970137c9201ea1dda5e7"
  },
  {
    "url": "assets/js/67.b2e4cb33.js",
    "revision": "527217c801521ae05a7bd0d0a9abfb76"
  },
  {
    "url": "assets/js/68.0e0a1af6.js",
    "revision": "3285da07519e6951ef670853cc96d6ad"
  },
  {
    "url": "assets/js/69.d32f55f0.js",
    "revision": "e39993060cbcf640473ad3dcfb9791d9"
  },
  {
    "url": "assets/js/7.5d265929.js",
    "revision": "ff80cc4949e0bc0d0e14cf88b28862d0"
  },
  {
    "url": "assets/js/70.f4b93e90.js",
    "revision": "6386f2945b9279c8d05921e163bfa3df"
  },
  {
    "url": "assets/js/71.ef03d52f.js",
    "revision": "bc6a6bc9be6926c2eb215570f6795d49"
  },
  {
    "url": "assets/js/72.a4819e42.js",
    "revision": "393cae6f3addf8b0be49dd980062765b"
  },
  {
    "url": "assets/js/73.2af2facc.js",
    "revision": "07aba7b86a591a8e1aba112cdcf4f854"
  },
  {
    "url": "assets/js/74.87c9ce65.js",
    "revision": "69ed53dd588e1c23e582c189bcf2f63e"
  },
  {
    "url": "assets/js/75.62fc1319.js",
    "revision": "337726dfcf0250c0a3ef50e5779a34ea"
  },
  {
    "url": "assets/js/76.d41f4659.js",
    "revision": "1b6ae6fdd939b8a26805b93e3387c4a2"
  },
  {
    "url": "assets/js/77.99afa5f4.js",
    "revision": "9bb3baa4cbb03d363a0002365321085d"
  },
  {
    "url": "assets/js/78.794198cb.js",
    "revision": "c70b7ef7049bdbb3919ee116930c3de8"
  },
  {
    "url": "assets/js/79.0d65a22a.js",
    "revision": "352abb0929d5ddd25069e42f8c1aab8f"
  },
  {
    "url": "assets/js/8.e3ee8025.js",
    "revision": "c22a6f1f732dbfbf063c2f28fbd84a7b"
  },
  {
    "url": "assets/js/80.1e8ef944.js",
    "revision": "b8457a9d2551beaa4cb254ee0fc76ffe"
  },
  {
    "url": "assets/js/81.f29d9525.js",
    "revision": "bb1ab4008fa9fe59a19356b1979d5d01"
  },
  {
    "url": "assets/js/82.4c3166d4.js",
    "revision": "8410901bf05a75230a4c86f85d30eacc"
  },
  {
    "url": "assets/js/83.91a5a766.js",
    "revision": "c5c95da8da604bbee313d0885778cce9"
  },
  {
    "url": "assets/js/84.67934daa.js",
    "revision": "b29d73a1d4bc8f7d8c64f2f14d7f04bd"
  },
  {
    "url": "assets/js/85.6c1b8496.js",
    "revision": "34a30c58828498d18eb8044d6942f2fa"
  },
  {
    "url": "assets/js/86.4a0cc1fa.js",
    "revision": "65fc35a61e21cdc49270c1a1133ab6b3"
  },
  {
    "url": "assets/js/87.5eafa336.js",
    "revision": "b31580caca31aae37a61b67d1186fe5a"
  },
  {
    "url": "assets/js/88.489d620d.js",
    "revision": "8a0ec688c1eefe598622764385762dc0"
  },
  {
    "url": "assets/js/89.d3d247f5.js",
    "revision": "602d53440b55d856a4bf4b75fc1750fb"
  },
  {
    "url": "assets/js/9.97d375e0.js",
    "revision": "6b12ece707d39ef3fd5e7007d1c31f9e"
  },
  {
    "url": "assets/js/90.665851db.js",
    "revision": "4e29e615d581635292235f0f514b5674"
  },
  {
    "url": "assets/js/91.4e29d3a0.js",
    "revision": "f86ae6ec007e31de8482a0ce71f299b0"
  },
  {
    "url": "assets/js/92.16b6405e.js",
    "revision": "ea9aa303fe6b8147e1b990c9f9a8fe21"
  },
  {
    "url": "assets/js/93.65ae9aac.js",
    "revision": "54d32a94325b8ac63f9ad3b91c21b074"
  },
  {
    "url": "assets/js/94.27e410bf.js",
    "revision": "b2854612aeb93fe7e9077aee5771ff7c"
  },
  {
    "url": "assets/js/95.79e21284.js",
    "revision": "421e7b6057065a036a1bc635469d4832"
  },
  {
    "url": "assets/js/96.d4b7ac75.js",
    "revision": "de9de9f95d69a9d31e2fb562de404890"
  },
  {
    "url": "assets/js/97.99f12629.js",
    "revision": "9e88bd69aba9075be0fdf1e4145969f0"
  },
  {
    "url": "assets/js/98.fe8da972.js",
    "revision": "5b3998d7e1825dbd6be9e045e73fca61"
  },
  {
    "url": "assets/js/99.396a82b3.js",
    "revision": "2eae87da978182c1af8a3a6e0d8fe496"
  },
  {
    "url": "assets/js/app.1d1dcbd6.js",
    "revision": "08705fd569a1602c71768e2073ea9c25"
  },
  {
    "url": "hero.png",
    "revision": "bf9756f0771c9499e8ebfadcb5da4151"
  },
  {
    "url": "home/alphabet.jpg",
    "revision": "3499ee8f00cecd931ddf8f90409f361f"
  },
  {
    "url": "home/courses.jpg",
    "revision": "d75d32ad3d7e119cf3564ee31cb863e9"
  },
  {
    "url": "home/dictionary.jpg",
    "revision": "69462af706a12fbaa64d4324dcc7fc8e"
  },
  {
    "url": "home/grammar.jpg",
    "revision": "19c23bcff850d7083f294259a6e05977"
  },
  {
    "url": "home/greetings.jpg",
    "revision": "a23babe3dc3675e83f6abbbeb9ed581a"
  },
  {
    "url": "home/kitchen.jpg",
    "revision": "b4190ca045f8ae89a3da7c47dc8b75bb"
  },
  {
    "url": "home/more_used.jpg",
    "revision": "165819f5607365d63f49e790ff9f40bb"
  },
  {
    "url": "home/people.jpg",
    "revision": "a1f601ae7dc06dbfa1643b634ee77a21"
  },
  {
    "url": "home/phrases.jpg",
    "revision": "e7801ece1f5fb8c75aacbe76e8f8a0c7"
  },
  {
    "url": "home/profession.jpg",
    "revision": "32cf7bf34c383f34ae89482c39f28568"
  },
  {
    "url": "home/vegetables.jpg",
    "revision": "06d39f1177690ae2e29a0786a23a2cbc"
  },
  {
    "url": "home/verbs.png",
    "revision": "1db334303ca05b1bb790c30014a28d28"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "46fa3968db394b2f4e815b47fb446d1a"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "913fc39bfe4be9583714f754b0e2efb6"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "10905b3ea7bccb4254b38cf5bbcb2f90"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "a5a610a2694eb9beae67c9cbfca8cffc"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "4e32be38a5e5362420686ef2146f31ef"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "2f544c46cd8621894cea3d80e914dab7"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "34f37b51f20a948f5ff637750c735630"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "4e32be38a5e5362420686ef2146f31ef"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "d59cdc20e530b9ddc159586961d0cbe9"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "ccc08661fa5948820b70c11e4f2e2f7b"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "26e25c5eb8e7061c44fa603d3f31296f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "90ff0ebc522d5841e3442bfe280035d9"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "81491474ad58360ee6552309bf5ebc4e"
  },
  {
    "url": "index.html",
    "revision": "9e9df46207140051d2a97b734ee03857"
  },
  {
    "url": "logo.png",
    "revision": "55b3058e403b667ac365966735bc6e5f"
  },
  {
    "url": "logo/achi.jpg",
    "revision": "5f42e091f4da1990f87f7ae04b4394d7"
  },
  {
    "url": "logo/akateko.jpg",
    "revision": "df5e1de23381cdc56e6e12f433a8a3db"
  },
  {
    "url": "logo/chol.jpg",
    "revision": "1cb6e98841b10d4d93cf47746640e91e"
  },
  {
    "url": "logo/chontal.jpg",
    "revision": "ce69f253b98408900618738dd5281e08"
  },
  {
    "url": "logo/chorti.jpg",
    "revision": "397aa54e698ec3e8742d8b6764f15742"
  },
  {
    "url": "logo/chuj.jpg",
    "revision": "99be6300b7c585b8d671644c77c21977"
  },
  {
    "url": "logo/huasteco.jpg",
    "revision": "b9b2e15cbaff690508d533d9b657f9b0"
  },
  {
    "url": "logo/ixil.jpg",
    "revision": "22878bdb2fed10fe02d79727a453db8f"
  },
  {
    "url": "logo/kaqchikel.jpg",
    "revision": "49f14ae22328f9a397b2346b9ab88636"
  },
  {
    "url": "logo/kiche.jpg",
    "revision": "7148e3e3e77a2c12bae66805c82a780a"
  },
  {
    "url": "logo/mam.jpg",
    "revision": "f98ded722ed492f1d8b8605d0db2630c"
  },
  {
    "url": "logo/maya.jpg",
    "revision": "59806bbfdbfaa423716d251ebb818c01"
  },
  {
    "url": "mx/amuzgo/courses/basic/index.html",
    "revision": "e3d151b1bcb972eda25c16327027e691"
  },
  {
    "url": "mx/amuzgo/courses/intermediate/index.html",
    "revision": "9eadf85489229a2fe6fd29d0914300cc"
  },
  {
    "url": "mx/amuzgo/dictionary/glossary.html",
    "revision": "5dca197c3c84a56991d2757585baca2d"
  },
  {
    "url": "mx/amuzgo/dictionary/index.html",
    "revision": "fd3c7d6de7daeb70c906fcd7639b18c9"
  },
  {
    "url": "mx/amuzgo/grammar/adjective/index.html",
    "revision": "898dee846cc8ab7278cd9ec8f95efbec"
  },
  {
    "url": "mx/amuzgo/grammar/adverb/index.html",
    "revision": "5f30f70836c6933f9726054be981aaf4"
  },
  {
    "url": "mx/amuzgo/grammar/alphabet/index.html",
    "revision": "e3e6bc22926739dcbd1a78b0f8011c0c"
  },
  {
    "url": "mx/amuzgo/grammar/article/index.html",
    "revision": "f6ef7175d1d918c4fb2d351302174469"
  },
  {
    "url": "mx/amuzgo/grammar/guide/index.html",
    "revision": "4e577d2e0d85a1ea21670ae8caeb58ec"
  },
  {
    "url": "mx/amuzgo/grammar/verbs/index.html",
    "revision": "afd6675880542f632b265aeaa45ff99b"
  },
  {
    "url": "mx/amuzgo/vocabulary/animals/index.html",
    "revision": "45ea1a33474005687274b4718eaa0707"
  },
  {
    "url": "mx/amuzgo/vocabulary/greetings/index.html",
    "revision": "39799c434644342cbfa4e4162cb9eba2"
  },
  {
    "url": "mx/amuzgo/vocabulary/more_used/index.html",
    "revision": "59675e8cc4376828b603559d6a50a5f7"
  },
  {
    "url": "mx/amuzgo/vocabulary/people/index.html",
    "revision": "c3f68f54524bb88e530a7963f10bdb74"
  },
  {
    "url": "mx/amuzgo/vocabulary/phrases/index.html",
    "revision": "eb96eba5901387d7933822b8643b43ae"
  },
  {
    "url": "mx/ayapaneco/courses/basic/index.html",
    "revision": "787e3fcba3969f07e784d6dcba102b87"
  },
  {
    "url": "mx/ayapaneco/courses/intermediate/index.html",
    "revision": "d45ed7f377d52b0a33604b62fee001d0"
  },
  {
    "url": "mx/ayapaneco/dictionary/glossary.html",
    "revision": "257145e4904625add38c6454b821beff"
  },
  {
    "url": "mx/ayapaneco/dictionary/index.html",
    "revision": "c75ef8ab84918c571878f8b2ac07dc34"
  },
  {
    "url": "mx/ayapaneco/grammar/adjective/index.html",
    "revision": "461cc97ff68689bceba6ba4f20208d46"
  },
  {
    "url": "mx/ayapaneco/grammar/adverb/index.html",
    "revision": "ebe53a86565f3bf6eb707bc698e2a310"
  },
  {
    "url": "mx/ayapaneco/grammar/alphabet/index.html",
    "revision": "108ae654feb0a9a96d0b294a00b1a8ab"
  },
  {
    "url": "mx/ayapaneco/grammar/article/index.html",
    "revision": "e9599fd44e55f9b706209c8664362a56"
  },
  {
    "url": "mx/ayapaneco/grammar/guide/index.html",
    "revision": "d347c7bd948f715e7af33e270fb45c83"
  },
  {
    "url": "mx/ayapaneco/grammar/verbs/index.html",
    "revision": "2ef86be7d82c8ca4d09ff8cc05d4d2b2"
  },
  {
    "url": "mx/ayapaneco/index.html",
    "revision": "6b424d2a5c903de88dbe90b28cacb574"
  },
  {
    "url": "mx/ayapaneco/vocabulary/animals/index.html",
    "revision": "c408428bc7c4f96b8f61c747cf7a232b"
  },
  {
    "url": "mx/ayapaneco/vocabulary/greetings/index.html",
    "revision": "1f78b246880feb5489ee6d3e9c11f39d"
  },
  {
    "url": "mx/ayapaneco/vocabulary/more_used/index.html",
    "revision": "93be12deca7eff1cc37316f80f12c506"
  },
  {
    "url": "mx/ayapaneco/vocabulary/people/index.html",
    "revision": "769e738302f4ef7cfbb9caca4cbe6afb"
  },
  {
    "url": "mx/ayapaneco/vocabulary/phrases/index.html",
    "revision": "a5060e531b3422b509480732d3ce8560"
  },
  {
    "url": "mx/chatino/courses/basic/index.html",
    "revision": "8d71ec8c61a8cb405dc8b098c2f1f72e"
  },
  {
    "url": "mx/chatino/courses/intermediate/index.html",
    "revision": "3a43df0f467179744321ad925a9f895b"
  },
  {
    "url": "mx/chatino/dictionary/glossary.html",
    "revision": "e8181b5091a23aabf3a1b7d4b514ba00"
  },
  {
    "url": "mx/chatino/dictionary/index.html",
    "revision": "e911dcd4f85710850585b747d48a2159"
  },
  {
    "url": "mx/chatino/grammar/adjective/index.html",
    "revision": "d7e95478c78f5109f3e72df00e6b176b"
  },
  {
    "url": "mx/chatino/grammar/adverb/index.html",
    "revision": "d4ad999282047e63e3a147a75d635b9b"
  },
  {
    "url": "mx/chatino/grammar/alphabet/index.html",
    "revision": "9179ca80c859302974bf28889eec8adb"
  },
  {
    "url": "mx/chatino/grammar/article/index.html",
    "revision": "dd62e23102222ae2f57c121ab4151e66"
  },
  {
    "url": "mx/chatino/grammar/guide/index.html",
    "revision": "1671db61669ac68e1e1e135952318b8f"
  },
  {
    "url": "mx/chatino/grammar/verbs/index.html",
    "revision": "7b168789da3d338a9d6ecfea2ec07a87"
  },
  {
    "url": "mx/chatino/index.html",
    "revision": "9dd15cfa17fd98d52d8272fcc8da87e9"
  },
  {
    "url": "mx/chatino/vocabulary/animals/index.html",
    "revision": "094754200d1df8ae85425237eb9d17b9"
  },
  {
    "url": "mx/chatino/vocabulary/greetings/index.html",
    "revision": "5ef3023b9a0cd4dc635baa9ef6756ec1"
  },
  {
    "url": "mx/chatino/vocabulary/more_used/index.html",
    "revision": "ae1684eadc8ecb28f40ca5d4db4cd93d"
  },
  {
    "url": "mx/chatino/vocabulary/people/index.html",
    "revision": "bea441cc255af6549d2e59e8dd4509c3"
  },
  {
    "url": "mx/chatino/vocabulary/phrases/index.html",
    "revision": "718b48bf711ea21760da40c652318083"
  },
  {
    "url": "mx/chichimeco/courses/basic/index.html",
    "revision": "495629031c6df9122aca5884f0a53c44"
  },
  {
    "url": "mx/chichimeco/courses/intermediate/index.html",
    "revision": "9190df3d421dc4b244910105b0764cdb"
  },
  {
    "url": "mx/chichimeco/dictionary/glossary.html",
    "revision": "f3bf21cdfc66471eec646b4795538fef"
  },
  {
    "url": "mx/chichimeco/dictionary/index.html",
    "revision": "a1c5f188c37f5ef7e342a75c6245fab3"
  },
  {
    "url": "mx/chichimeco/grammar/adjective/index.html",
    "revision": "3c1c390eb42ad1b68a049e67457dabea"
  },
  {
    "url": "mx/chichimeco/grammar/adverb/index.html",
    "revision": "842bd2b18a57953a145a82b76597decf"
  },
  {
    "url": "mx/chichimeco/grammar/alphabet/index.html",
    "revision": "0a3ce2f9c2d6ebe6604fa6f46200c6d0"
  },
  {
    "url": "mx/chichimeco/grammar/article/index.html",
    "revision": "8660575331586c8ad8eead50602bf8ea"
  },
  {
    "url": "mx/chichimeco/grammar/guide/index.html",
    "revision": "4adc7d29dc9cecce6cecba2e048b75e1"
  },
  {
    "url": "mx/chichimeco/grammar/verbs/index.html",
    "revision": "dfb63e4e8e5257d1c3726ba311bf88d5"
  },
  {
    "url": "mx/chichimeco/index.html",
    "revision": "48218343d8ae87aaae76f30df3a22ad6"
  },
  {
    "url": "mx/chichimeco/vocabulary/animals/index.html",
    "revision": "a8852138ac300b09841a9f5fe52b7b89"
  },
  {
    "url": "mx/chichimeco/vocabulary/greetings/index.html",
    "revision": "272341bd7a0452824f5a1ec2a561061d"
  },
  {
    "url": "mx/chichimeco/vocabulary/more_used/index.html",
    "revision": "ce6bcb3ed193db533d426259c484ab9a"
  },
  {
    "url": "mx/chichimeco/vocabulary/people/index.html",
    "revision": "d0556aec0d5e9922935536c98eaf8a42"
  },
  {
    "url": "mx/chichimeco/vocabulary/phrases/index.html",
    "revision": "4cbac8a4e446ef46f61dfa3bee8707cc"
  },
  {
    "url": "mx/chinanteco/courses/basic/index.html",
    "revision": "18888399785d6e02efb9bbaeb13c1bf1"
  },
  {
    "url": "mx/chinanteco/courses/intermediate/index.html",
    "revision": "cff3a8df2d53a7b514f0251dbf8f0638"
  },
  {
    "url": "mx/chinanteco/dictionary/glossary.html",
    "revision": "939c8598ec770d608f42ad73b7eec606"
  },
  {
    "url": "mx/chinanteco/dictionary/index.html",
    "revision": "f59b11accb507dcd73d704f3beab84e4"
  },
  {
    "url": "mx/chinanteco/grammar/adjective/index.html",
    "revision": "875d6c4f6647d5cc4088cb212ecd466d"
  },
  {
    "url": "mx/chinanteco/grammar/adverb/index.html",
    "revision": "fc4cd00a8770e13f87c937e0affcfd0f"
  },
  {
    "url": "mx/chinanteco/grammar/alphabet/index.html",
    "revision": "37be537053a5620ab2d932d4efb54703"
  },
  {
    "url": "mx/chinanteco/grammar/article/index.html",
    "revision": "f0e2e949edd290cfd069616b46fb5967"
  },
  {
    "url": "mx/chinanteco/grammar/guide/index.html",
    "revision": "5bcd7313150687ee8b26a301556c0499"
  },
  {
    "url": "mx/chinanteco/grammar/verbs/index.html",
    "revision": "3b0deb672ce92d3c37d0ba961ad7c221"
  },
  {
    "url": "mx/chinanteco/index.html",
    "revision": "14c90d9f82f5119b6797d6130ed073cd"
  },
  {
    "url": "mx/chinanteco/vocabulary/animals/index.html",
    "revision": "dec4fa374d7a0ca91e0ba60502d8a748"
  },
  {
    "url": "mx/chinanteco/vocabulary/greetings/index.html",
    "revision": "ac40bf2909f79038d99e62b608b2f540"
  },
  {
    "url": "mx/chinanteco/vocabulary/more_used/index.html",
    "revision": "bcf85cb3d0973d77c0b02e6d59fb12dc"
  },
  {
    "url": "mx/chinanteco/vocabulary/people/index.html",
    "revision": "139ef184747ecfa1e4fa6e1c65e3fd68"
  },
  {
    "url": "mx/chinanteco/vocabulary/phrases/index.html",
    "revision": "69355683d1c930047a08aeb7c180173a"
  },
  {
    "url": "mx/chocholteco/courses/basic/index.html",
    "revision": "4d870865a01a1ddf86a3304071562032"
  },
  {
    "url": "mx/chocholteco/courses/intermediate/index.html",
    "revision": "530a517a494d01af7690e3ce1fbd1c05"
  },
  {
    "url": "mx/chocholteco/dictionary/glossary.html",
    "revision": "0e158218d7baf82cf522a6675c9e399e"
  },
  {
    "url": "mx/chocholteco/dictionary/index.html",
    "revision": "f00561dd7446853ccf2f1cec8e779d53"
  },
  {
    "url": "mx/chocholteco/grammar/adjective/index.html",
    "revision": "c994251f54c881447302297f3128032e"
  },
  {
    "url": "mx/chocholteco/grammar/adverb/index.html",
    "revision": "daae3383aa688ce4d990693acf0a0261"
  },
  {
    "url": "mx/chocholteco/grammar/alphabet/index.html",
    "revision": "888f32b45ba0c5ee7a00beffd5fb425d"
  },
  {
    "url": "mx/chocholteco/grammar/article/index.html",
    "revision": "fb801213a40d46cf217728282f8f95c3"
  },
  {
    "url": "mx/chocholteco/grammar/guide/index.html",
    "revision": "994d90fb02e07903d0e9262318ff8cda"
  },
  {
    "url": "mx/chocholteco/grammar/verbs/index.html",
    "revision": "397c95d2445b88c32c8a37c9936d4b19"
  },
  {
    "url": "mx/chocholteco/index.html",
    "revision": "dc7fb2f28f6dcb5cedad903907203456"
  },
  {
    "url": "mx/chocholteco/vocabulary/animals/index.html",
    "revision": "07de00a0bc077611ca77705b418149e4"
  },
  {
    "url": "mx/chocholteco/vocabulary/greetings/index.html",
    "revision": "eab20dea6c5ea508825ed893d4b09682"
  },
  {
    "url": "mx/chocholteco/vocabulary/more_used/index.html",
    "revision": "687a82a3138a8609a686b0cd05c6fd1b"
  },
  {
    "url": "mx/chocholteco/vocabulary/people/index.html",
    "revision": "0e0de738219f5f116c43c426ff54cbb3"
  },
  {
    "url": "mx/chocholteco/vocabulary/phrases/index.html",
    "revision": "e9923add7ff088745114a9c5f38c7c2e"
  },
  {
    "url": "mx/cuicateco/courses/basic/index.html",
    "revision": "08597d37506577a9bf2ab8727b271413"
  },
  {
    "url": "mx/cuicateco/courses/intermediate/index.html",
    "revision": "809b07ea22e462b1a9ae17a3c5538a58"
  },
  {
    "url": "mx/cuicateco/dictionary/glossary.html",
    "revision": "f6911ee9bc3ceda25c70557a165e2b1f"
  },
  {
    "url": "mx/cuicateco/dictionary/index.html",
    "revision": "8e2fac49c274720d4dea919c41ab0c7c"
  },
  {
    "url": "mx/cuicateco/grammar/adjective/index.html",
    "revision": "5da597e1e069e85e007de722ce184ee0"
  },
  {
    "url": "mx/cuicateco/grammar/adverb/index.html",
    "revision": "81c5499574bf8daf2f6456519b04c2f6"
  },
  {
    "url": "mx/cuicateco/grammar/alphabet/index.html",
    "revision": "a44d2637578b917acf5afd924b0cc7ee"
  },
  {
    "url": "mx/cuicateco/grammar/article/index.html",
    "revision": "3af6d11148cb6984b3b5cd18e1406800"
  },
  {
    "url": "mx/cuicateco/grammar/guide/index.html",
    "revision": "2b8bab91bd39bb4c543857c4b86d8918"
  },
  {
    "url": "mx/cuicateco/grammar/verbs/index.html",
    "revision": "27d9fea4e4f85dfc3e4ee2e23a5c9f21"
  },
  {
    "url": "mx/cuicateco/index.html",
    "revision": "81904b7b16f62f5f95059406fb5a8899"
  },
  {
    "url": "mx/cuicateco/vocabulary/animals/index.html",
    "revision": "8abb614c6350e48629c84ce2efdbed42"
  },
  {
    "url": "mx/cuicateco/vocabulary/greetings/index.html",
    "revision": "09ad3393975c20e2a7c6027b4b854f1f"
  },
  {
    "url": "mx/cuicateco/vocabulary/more_used/index.html",
    "revision": "16a9189a899f75bcbe3a142609bbd01b"
  },
  {
    "url": "mx/cuicateco/vocabulary/people/index.html",
    "revision": "672662b831be5b4acfc3c8c468e9565a"
  },
  {
    "url": "mx/cuicateco/vocabulary/phrases/index.html",
    "revision": "6ffa5405d7e0e1426345d38727135fc7"
  },
  {
    "url": "mx/ixcateco/courses/basic/index.html",
    "revision": "afc501568f681d6442333a54ddd3dc78"
  },
  {
    "url": "mx/ixcateco/courses/intermediate/index.html",
    "revision": "38eee464a4b12dc4bde5785dfee0d124"
  },
  {
    "url": "mx/ixcateco/dictionary/glossary.html",
    "revision": "c552820f63d4d2d84905d546523765ba"
  },
  {
    "url": "mx/ixcateco/dictionary/index.html",
    "revision": "1e6846afc2f5ae1ef981de3639d977d7"
  },
  {
    "url": "mx/ixcateco/grammar/adjective/index.html",
    "revision": "97a606f1afd24c48ff8e64f877071f43"
  },
  {
    "url": "mx/ixcateco/grammar/adverb/index.html",
    "revision": "118cbe5a268a44c5cacb59b36cc4f071"
  },
  {
    "url": "mx/ixcateco/grammar/alphabet/index.html",
    "revision": "8590a4c266b348416d5a9c75a63377b7"
  },
  {
    "url": "mx/ixcateco/grammar/article/index.html",
    "revision": "de4f20bde0e32a7f7bf839c98c1f733b"
  },
  {
    "url": "mx/ixcateco/grammar/guide/index.html",
    "revision": "676f8b29ceb900a2d873cd7e8f8e2378"
  },
  {
    "url": "mx/ixcateco/grammar/verbs/index.html",
    "revision": "08b5d4dd3d8742e77cb072b9983b009a"
  },
  {
    "url": "mx/ixcateco/index.html",
    "revision": "42c14ffa1f79b4d26725a145740f47c9"
  },
  {
    "url": "mx/ixcateco/vocabulary/animals/index.html",
    "revision": "e142fb68ff381d1a5e4f1e796bed6303"
  },
  {
    "url": "mx/ixcateco/vocabulary/greetings/index.html",
    "revision": "ed488d5412558de1c2581bedef9f6769"
  },
  {
    "url": "mx/ixcateco/vocabulary/more_used/index.html",
    "revision": "ec95357997f9c99a3ef25a5bb94b4f4f"
  },
  {
    "url": "mx/ixcateco/vocabulary/people/index.html",
    "revision": "132df0790b78ccff56bb2d44d65c2b5c"
  },
  {
    "url": "mx/ixcateco/vocabulary/phrases/index.html",
    "revision": "304cba78f395818a29412fb0281e1732"
  },
  {
    "url": "mx/matlatzinca/courses/basic/index.html",
    "revision": "94e3c745625b56b817e005e4c73bfa39"
  },
  {
    "url": "mx/matlatzinca/courses/intermediate/index.html",
    "revision": "b26a3c1bdf351f4daf5860b203a34eca"
  },
  {
    "url": "mx/matlatzinca/dictionary/glossary.html",
    "revision": "453a506e06b463e0a2c041a0937a93ee"
  },
  {
    "url": "mx/matlatzinca/dictionary/index.html",
    "revision": "d1d5b122c8e70f120a7c9831b62eb5d9"
  },
  {
    "url": "mx/matlatzinca/grammar/adjective/index.html",
    "revision": "33431622610e99876aaff09db23559ea"
  },
  {
    "url": "mx/matlatzinca/grammar/adverb/index.html",
    "revision": "3346a65f8c3d3dd47ddfe9370404e051"
  },
  {
    "url": "mx/matlatzinca/grammar/alphabet/index.html",
    "revision": "35ba2096fb5a0887eb243e6e662295eb"
  },
  {
    "url": "mx/matlatzinca/grammar/article/index.html",
    "revision": "d04c0ce961c0c320eb18e6aa6eb08492"
  },
  {
    "url": "mx/matlatzinca/grammar/guide/index.html",
    "revision": "e3c2640cfbb08b67b3783a9950bf0222"
  },
  {
    "url": "mx/matlatzinca/grammar/verbs/index.html",
    "revision": "c039b2e4ff0a9aa23d6eb3249e0d6a95"
  },
  {
    "url": "mx/matlatzinca/index.html",
    "revision": "318d05180cf165535b6c8542e3de2b45"
  },
  {
    "url": "mx/matlatzinca/vocabulary/animals/index.html",
    "revision": "41a52433ca7a91bba72c229c80d6be2a"
  },
  {
    "url": "mx/matlatzinca/vocabulary/greetings/index.html",
    "revision": "eb7da29bbe316095d0294c9befbc83c1"
  },
  {
    "url": "mx/matlatzinca/vocabulary/more_used/index.html",
    "revision": "5407999f081b1bd73a70174ac4e77888"
  },
  {
    "url": "mx/matlatzinca/vocabulary/people/index.html",
    "revision": "d6fc93baf370942da73e321871059cf5"
  },
  {
    "url": "mx/matlatzinca/vocabulary/phrases/index.html",
    "revision": "e872f7d12611abf3e1558f233d053b84"
  },
  {
    "url": "mx/maya/courses/basic/index.html",
    "revision": "1e03c79ca4c9beee6dd19fe62e54e6c0"
  },
  {
    "url": "mx/maya/courses/intermediate/index.html",
    "revision": "e540b6c246667bdee5527b6465dbbc03"
  },
  {
    "url": "mx/maya/dictionary/glossary.html",
    "revision": "af309ee668881a863a6784243b4faa9f"
  },
  {
    "url": "mx/maya/dictionary/index.html",
    "revision": "2c3e15230cca242c956ef87ad92f069e"
  },
  {
    "url": "mx/maya/grammar/adjective/index.html",
    "revision": "5b40f4f17b5db991b0c83f4987b79a9e"
  },
  {
    "url": "mx/maya/grammar/adverb/index.html",
    "revision": "547c1f9e6f534a6330495f66b021ff15"
  },
  {
    "url": "mx/maya/grammar/alphabet/index.html",
    "revision": "21e46f3fe6e8fac45c126046430cbd7d"
  },
  {
    "url": "mx/maya/grammar/article/index.html",
    "revision": "6ee5c61d4c62599c6fd05cb047603ecf"
  },
  {
    "url": "mx/maya/grammar/guide/index.html",
    "revision": "f71b3d7241faf57d0bddfab708b3f698"
  },
  {
    "url": "mx/maya/grammar/verbs/index.html",
    "revision": "ad6ccbd7a84448786ecb4a4147cb70ee"
  },
  {
    "url": "mx/maya/index.html",
    "revision": "bb0c0c6cd13574960d1a44e1bf07ea25"
  },
  {
    "url": "mx/maya/vocabulary/animals/index.html",
    "revision": "5a20f2d6211d01c2c5a42079aaee1131"
  },
  {
    "url": "mx/maya/vocabulary/greetings/index.html",
    "revision": "3cdf818278a82da2484cd8c60e3a24b4"
  },
  {
    "url": "mx/maya/vocabulary/more_used/index.html",
    "revision": "4e890019aa52cd6767c10f3a1bc7276d"
  },
  {
    "url": "mx/maya/vocabulary/people/index.html",
    "revision": "b029caf723157f096c4eb8b461549d6e"
  },
  {
    "url": "mx/maya/vocabulary/phrases/index.html",
    "revision": "d169534e86cb23aa4e220966d5c21941"
  },
  {
    "url": "mx/mazahua/courses/basic/index.html",
    "revision": "692eedf6035070a2240f4f454a8b1689"
  },
  {
    "url": "mx/mazahua/courses/intermediate/index.html",
    "revision": "5f78a26c4c9b7133b0c893b9919c8e8a"
  },
  {
    "url": "mx/mazahua/dictionary/glossary.html",
    "revision": "2bf2e82800d63e4298b1df755f774ab3"
  },
  {
    "url": "mx/mazahua/dictionary/index.html",
    "revision": "5bf93d1bbf09a821ba410f795cafbe69"
  },
  {
    "url": "mx/mazahua/grammar/adjective/index.html",
    "revision": "66728c02c223fea927a11642d37fa08a"
  },
  {
    "url": "mx/mazahua/grammar/adverb/index.html",
    "revision": "58e8d405c52edc5e53d94a5b739264c7"
  },
  {
    "url": "mx/mazahua/grammar/alphabet/index.html",
    "revision": "cb9b1f17c268347ae724fdb985785313"
  },
  {
    "url": "mx/mazahua/grammar/article/index.html",
    "revision": "f9f2e0ba93ac512c6b6155c468170a4f"
  },
  {
    "url": "mx/mazahua/grammar/guide/index.html",
    "revision": "7ba20b3659eb62fb0d2b2c87665375b5"
  },
  {
    "url": "mx/mazahua/grammar/verbs/index.html",
    "revision": "d2207e20193d0d3a0086bc87a4e1730f"
  },
  {
    "url": "mx/mazahua/index.html",
    "revision": "a2128a5129d75a29b3803b1aaa84de46"
  },
  {
    "url": "mx/mazahua/vocabulary/animals/index.html",
    "revision": "fbed34685a9cd8c38854871b95ba32e6"
  },
  {
    "url": "mx/mazahua/vocabulary/greetings/index.html",
    "revision": "4020399a66517597b115c0c2ad79c632"
  },
  {
    "url": "mx/mazahua/vocabulary/more_used/index.html",
    "revision": "7bf15c606f963dc889170d00a1b81665"
  },
  {
    "url": "mx/mazahua/vocabulary/people/index.html",
    "revision": "41f08126339d7ce39892acf13dd3137d"
  },
  {
    "url": "mx/mazahua/vocabulary/phrases/index.html",
    "revision": "bc4a2e038a20a77bff9f8bad627b6c2f"
  },
  {
    "url": "mx/mixe/courses/basic/index.html",
    "revision": "853d2758fc546e44be432adb94f4b237"
  },
  {
    "url": "mx/mixe/courses/intermediate/index.html",
    "revision": "46c5adc78959696b3d5fc17e6c55c2bf"
  },
  {
    "url": "mx/mixe/dictionary/glossary.html",
    "revision": "3244193f3b8368280f5ccb10d7ed70a4"
  },
  {
    "url": "mx/mixe/dictionary/index.html",
    "revision": "db308ab1efbe83d97ada83b434862ea2"
  },
  {
    "url": "mx/mixe/grammar/adjective/index.html",
    "revision": "e788b81e29d55049fc196eb032283c0f"
  },
  {
    "url": "mx/mixe/grammar/adverb/index.html",
    "revision": "5eeac353c7fb515651793b898524c63e"
  },
  {
    "url": "mx/mixe/grammar/alphabet/index.html",
    "revision": "702cd0125f2ab45ed5d637f77ef17ee5"
  },
  {
    "url": "mx/mixe/grammar/article/index.html",
    "revision": "83c3b6dfaa481ebcb0f42d4598103aa9"
  },
  {
    "url": "mx/mixe/grammar/guide/index.html",
    "revision": "1add0c10034c2b01812fff7230de840b"
  },
  {
    "url": "mx/mixe/grammar/verbs/index.html",
    "revision": "38ebd593b4caf360a24e0a52c012de5f"
  },
  {
    "url": "mx/mixe/index.html",
    "revision": "f5af19a2238f17c28e34a441233b77d9"
  },
  {
    "url": "mx/mixe/vocabulary/animals/index.html",
    "revision": "980e3a11b796918752bf917d91f9251b"
  },
  {
    "url": "mx/mixe/vocabulary/greetings/index.html",
    "revision": "05a827f1ef9e38816bce69903b86a06d"
  },
  {
    "url": "mx/mixe/vocabulary/more_used/index.html",
    "revision": "dbd2f2025b8ac9428f5cbf336ac6b52a"
  },
  {
    "url": "mx/mixe/vocabulary/people/index.html",
    "revision": "fd0e6d942e9bbe1a18d73e4f1a9682fc"
  },
  {
    "url": "mx/mixe/vocabulary/phrases/index.html",
    "revision": "e5e060ec82d35e04cee8ac710d75d8a2"
  },
  {
    "url": "mx/oluteco/courses/basic/index.html",
    "revision": "b78629ab0dccb2906dcc9add5a212de0"
  },
  {
    "url": "mx/oluteco/courses/intermediate/index.html",
    "revision": "1f6cc3ec42269a083cf74ab68f05e603"
  },
  {
    "url": "mx/oluteco/dictionary/glossary.html",
    "revision": "0c89057ae64837fc514a7305228d330b"
  },
  {
    "url": "mx/oluteco/dictionary/index.html",
    "revision": "6b36e2073868edf59b772ecf37a7505f"
  },
  {
    "url": "mx/oluteco/grammar/adjective/index.html",
    "revision": "42affe7ea449a24784ce59909d1dea23"
  },
  {
    "url": "mx/oluteco/grammar/adverb/index.html",
    "revision": "91e7867a9ea610dec1af5c295ed29f18"
  },
  {
    "url": "mx/oluteco/grammar/alphabet/index.html",
    "revision": "1e033e88a7a0cc16849477c2f3b91b77"
  },
  {
    "url": "mx/oluteco/grammar/article/index.html",
    "revision": "8b4c5f2c19c95e97c1fea1dfe27c9e52"
  },
  {
    "url": "mx/oluteco/grammar/guide/index.html",
    "revision": "f1a8c510a2a0e7f0d0d33d74765943d2"
  },
  {
    "url": "mx/oluteco/grammar/verbs/index.html",
    "revision": "01027cf72517a1289a5b65c72443808d"
  },
  {
    "url": "mx/oluteco/index.html",
    "revision": "5f160a8cf9745a201e69222b68c0e7df"
  },
  {
    "url": "mx/oluteco/vocabulary/animals/index.html",
    "revision": "7476e3ad1809f44aaa2ef40536412379"
  },
  {
    "url": "mx/oluteco/vocabulary/greetings/index.html",
    "revision": "0a6f4febdd9ccb0b2225e6250114a323"
  },
  {
    "url": "mx/oluteco/vocabulary/more_used/index.html",
    "revision": "d057845462bf345d7646ac4206f0239e"
  },
  {
    "url": "mx/oluteco/vocabulary/people/index.html",
    "revision": "4b35f3e63f55b57e8c20d860f4e37cc2"
  },
  {
    "url": "mx/oluteco/vocabulary/phrases/index.html",
    "revision": "38bfde5cc41f927ef41c9330792f3676"
  },
  {
    "url": "mx/popoluca/courses/basic/index.html",
    "revision": "8e036b9cb0b608fe5f47ad6e4fc42215"
  },
  {
    "url": "mx/popoluca/courses/intermediate/index.html",
    "revision": "1977512fb1dd77941e8e1fa980c743c8"
  },
  {
    "url": "mx/popoluca/dictionary/glossary.html",
    "revision": "8b82add5755b0a651e58fcc3c54e2540"
  },
  {
    "url": "mx/popoluca/dictionary/index.html",
    "revision": "191bf5aeac2f6c275d70b9a690a8916a"
  },
  {
    "url": "mx/popoluca/grammar/adjective/index.html",
    "revision": "a921c9edc2854c0f8af83c3ff70f8552"
  },
  {
    "url": "mx/popoluca/grammar/adverb/index.html",
    "revision": "2939b07cee5a3525908669ea50b0809a"
  },
  {
    "url": "mx/popoluca/grammar/alphabet/index.html",
    "revision": "62e30a3c6c06121a2c8976ff120726b3"
  },
  {
    "url": "mx/popoluca/grammar/article/index.html",
    "revision": "9c09c2705f3b6c4d3b1cb7655c7eb93d"
  },
  {
    "url": "mx/popoluca/grammar/guide/index.html",
    "revision": "0b3690329735c9e696b74f74b9bfe58c"
  },
  {
    "url": "mx/popoluca/grammar/verbs/index.html",
    "revision": "f776293ec651e3d5aedb7a47a7dd93dc"
  },
  {
    "url": "mx/popoluca/index.html",
    "revision": "f9490831b33042e9b3d9b2376bd095c5"
  },
  {
    "url": "mx/popoluca/vocabulary/animals/index.html",
    "revision": "c69b9c32b883ba59696b05a1dc9dc773"
  },
  {
    "url": "mx/popoluca/vocabulary/greetings/index.html",
    "revision": "d99e38b2d0739b8b181d8066398d3b62"
  },
  {
    "url": "mx/popoluca/vocabulary/more_used/index.html",
    "revision": "9dbf2b7e213b0793b3d7df54ef2bffa2"
  },
  {
    "url": "mx/popoluca/vocabulary/people/index.html",
    "revision": "0606447d917d937ff03be00334b5ed44"
  },
  {
    "url": "mx/popoluca/vocabulary/phrases/index.html",
    "revision": "dc19880088cc23268f198d86498ac0c3"
  },
  {
    "url": "mx/sayulteco/courses/basic/index.html",
    "revision": "fe151daa3afd8c2587ba239b574485d5"
  },
  {
    "url": "mx/sayulteco/courses/intermediate/index.html",
    "revision": "758219d3bd037e29d385ed4c01e89bff"
  },
  {
    "url": "mx/sayulteco/dictionary/glossary.html",
    "revision": "b0bbef1013df26db2580393290900761"
  },
  {
    "url": "mx/sayulteco/dictionary/index.html",
    "revision": "b1e8b69512d5065c12be0845e6646335"
  },
  {
    "url": "mx/sayulteco/grammar/adjective/index.html",
    "revision": "7db26f78bb2633a6f1fe8884dd9f31c4"
  },
  {
    "url": "mx/sayulteco/grammar/adverb/index.html",
    "revision": "e410651e3103bd78a47b30fbae1a0457"
  },
  {
    "url": "mx/sayulteco/grammar/alphabet/index.html",
    "revision": "150681c26733c9601904262a4757e442"
  },
  {
    "url": "mx/sayulteco/grammar/article/index.html",
    "revision": "22651b08704005ca5ec447da38c4d423"
  },
  {
    "url": "mx/sayulteco/grammar/guide/index.html",
    "revision": "5b83eb98ff525d1bee564242981f87d8"
  },
  {
    "url": "mx/sayulteco/grammar/verbs/index.html",
    "revision": "6444ce9072aab6b3481c4c492afadc25"
  },
  {
    "url": "mx/sayulteco/index.html",
    "revision": "cf40c71b3c221f83e92ed4678235fbf5"
  },
  {
    "url": "mx/sayulteco/vocabulary/animals/index.html",
    "revision": "3333dbbc0fd02c3685e0950cd5877569"
  },
  {
    "url": "mx/sayulteco/vocabulary/greetings/index.html",
    "revision": "d2bf3458c515be76532db7048b962797"
  },
  {
    "url": "mx/sayulteco/vocabulary/more_used/index.html",
    "revision": "0ef7716db891f2000c3d15af38bccd4a"
  },
  {
    "url": "mx/sayulteco/vocabulary/people/index.html",
    "revision": "030491bfa78672b027a69930546ffe8d"
  },
  {
    "url": "mx/sayulteco/vocabulary/phrases/index.html",
    "revision": "5170e56b6097d4f14e816cb3923a5fd5"
  },
  {
    "url": "mx/texistepequeno/courses/basic/index.html",
    "revision": "a4673c59ebf167c5a70fbea2d31a97c0"
  },
  {
    "url": "mx/texistepequeno/courses/intermediate/index.html",
    "revision": "ac6b7e61868c3ed7d016b07c5079179a"
  },
  {
    "url": "mx/texistepequeno/dictionary/glossary.html",
    "revision": "aab8360f0b8d73141cfa1ee2f37f5e9c"
  },
  {
    "url": "mx/texistepequeno/dictionary/index.html",
    "revision": "f5f2a4f9cef4036277d026b2a6a048cd"
  },
  {
    "url": "mx/texistepequeno/grammar/adjective/index.html",
    "revision": "ef3ac88850b442b0431c881ff27d1556"
  },
  {
    "url": "mx/texistepequeno/grammar/adverb/index.html",
    "revision": "e0d4a2d424c1e003141d7bbf940e0baa"
  },
  {
    "url": "mx/texistepequeno/grammar/alphabet/index.html",
    "revision": "d914f4f13f94b96088c0eb45b7f834a1"
  },
  {
    "url": "mx/texistepequeno/grammar/article/index.html",
    "revision": "fe3e000a6ccb4683cae3240ca01ac78c"
  },
  {
    "url": "mx/texistepequeno/grammar/guide/index.html",
    "revision": "a085c19611fcea0d58887d925fd8b74e"
  },
  {
    "url": "mx/texistepequeno/grammar/verbs/index.html",
    "revision": "41f59dd74571c8f5c67592a81e031607"
  },
  {
    "url": "mx/texistepequeno/index.html",
    "revision": "73c283f2c329a5b5d9edd57aa734cc27"
  },
  {
    "url": "mx/texistepequeno/vocabulary/animals/index.html",
    "revision": "acdf65b5b937fcd2678bd8d5821e91ca"
  },
  {
    "url": "mx/texistepequeno/vocabulary/greetings/index.html",
    "revision": "99de31a9210ed748e7fcaeadbfb113cc"
  },
  {
    "url": "mx/texistepequeno/vocabulary/more_used/index.html",
    "revision": "31bf2b2af89f77998521056a6e622746"
  },
  {
    "url": "mx/texistepequeno/vocabulary/people/index.html",
    "revision": "dbcc5790bc9910468be520860c007081"
  },
  {
    "url": "mx/texistepequeno/vocabulary/phrases/index.html",
    "revision": "0551a2cd4ba9a45527834de20715d0ef"
  },
  {
    "url": "mx/tlahuica/courses/basic/index.html",
    "revision": "ab9d362857173e94ff0ad370ffb99401"
  },
  {
    "url": "mx/tlahuica/courses/intermediate/index.html",
    "revision": "dca75e3a8b025a3b746cd3af60a153f4"
  },
  {
    "url": "mx/tlahuica/dictionary/glossary.html",
    "revision": "c676706fa53b63931f5584dadcb7992b"
  },
  {
    "url": "mx/tlahuica/dictionary/index.html",
    "revision": "07c35a37f1f6863ff12e4ae59fc43f6c"
  },
  {
    "url": "mx/tlahuica/grammar/adjective/index.html",
    "revision": "a9092b01993de45e90f7e42bc5feb828"
  },
  {
    "url": "mx/tlahuica/grammar/adverb/index.html",
    "revision": "ba26c645a07c3995b806a43a12022255"
  },
  {
    "url": "mx/tlahuica/grammar/alphabet/index.html",
    "revision": "0bb964ef906134c9571d13f66a4bd643"
  },
  {
    "url": "mx/tlahuica/grammar/article/index.html",
    "revision": "e4bbdea186779b5c404cff93e59a5ef1"
  },
  {
    "url": "mx/tlahuica/grammar/guide/index.html",
    "revision": "49e177d60be7f8fe6f2f5142373b0a18"
  },
  {
    "url": "mx/tlahuica/grammar/verbs/index.html",
    "revision": "74ed5b2632a26365f1dae95f668ba295"
  },
  {
    "url": "mx/tlahuica/index.html",
    "revision": "6729b6e957b50bdab945185f9ff00359"
  },
  {
    "url": "mx/tlahuica/vocabulary/animals/index.html",
    "revision": "96ee2b8c620259ec28be1cae5dec3948"
  },
  {
    "url": "mx/tlahuica/vocabulary/greetings/index.html",
    "revision": "5d675018815aba62c8f9c682760f406f"
  },
  {
    "url": "mx/tlahuica/vocabulary/more_used/index.html",
    "revision": "31a9e8d6c839c11807e1f203ccd9e2b7"
  },
  {
    "url": "mx/tlahuica/vocabulary/people/index.html",
    "revision": "cbfabe0923d5a4a390a1e61cb8efdfec"
  },
  {
    "url": "mx/tlahuica/vocabulary/phrases/index.html",
    "revision": "786548ca0556dfac170f4039f5a711fe"
  },
  {
    "url": "mx/tlapaneco/courses/basic/index.html",
    "revision": "e122e46830ba0d53ac8b8a470856139c"
  },
  {
    "url": "mx/tlapaneco/courses/intermediate/index.html",
    "revision": "e35ee2c6d66a87e05308fa8ebb04fe1d"
  },
  {
    "url": "mx/tlapaneco/dictionary/glossary.html",
    "revision": "2f9c77ff70db23e2b2ad1b02d4da9269"
  },
  {
    "url": "mx/tlapaneco/dictionary/index.html",
    "revision": "4b3f3b781d64739c34192a4646c850ec"
  },
  {
    "url": "mx/tlapaneco/grammar/adjective/index.html",
    "revision": "0311ad09c5e0b5748fd7030caec6b4a5"
  },
  {
    "url": "mx/tlapaneco/grammar/adverb/index.html",
    "revision": "c8662547c80f14256aa897979f5a4793"
  },
  {
    "url": "mx/tlapaneco/grammar/alphabet/index.html",
    "revision": "fe8247dbf47ac924c11e04f223b7a00c"
  },
  {
    "url": "mx/tlapaneco/grammar/article/index.html",
    "revision": "5f7495b5e066e575f4760b0f1edc7cd0"
  },
  {
    "url": "mx/tlapaneco/grammar/guide/index.html",
    "revision": "98a4ec20382396edec51c0f5e53d9383"
  },
  {
    "url": "mx/tlapaneco/grammar/verbs/index.html",
    "revision": "9f6a4d7417725d764dd28b541d64ab03"
  },
  {
    "url": "mx/tlapaneco/index.html",
    "revision": "c382ab01a37ce099b56337380e2630f1"
  },
  {
    "url": "mx/tlapaneco/vocabulary/animals/index.html",
    "revision": "1660982606fc3a10d1390b4b4a611851"
  },
  {
    "url": "mx/tlapaneco/vocabulary/greetings/index.html",
    "revision": "c2310cd95db073a2ec34288196fa93d0"
  },
  {
    "url": "mx/tlapaneco/vocabulary/more_used/index.html",
    "revision": "20fb3d5889184cb36e977f6d618d66e5"
  },
  {
    "url": "mx/tlapaneco/vocabulary/people/index.html",
    "revision": "2d1730b2de1ade7734db6bce7c34a6cf"
  },
  {
    "url": "mx/tlapaneco/vocabulary/phrases/index.html",
    "revision": "b0b2f49e1dcd0a1a2501d7baa5e7d9e4"
  },
  {
    "url": "mx/tojolabal/courses/basic/index.html",
    "revision": "cb45cac791671dd485cce481aecebd1f"
  },
  {
    "url": "mx/tojolabal/courses/intermediate/index.html",
    "revision": "134639dd3995d47ca267492ce5cc13fd"
  },
  {
    "url": "mx/tojolabal/dictionary/glossary.html",
    "revision": "f047e6c9d3c9105501000c98219bdda5"
  },
  {
    "url": "mx/tojolabal/dictionary/index.html",
    "revision": "87b3b7ef17a1c055405d3d9a3e4c35ea"
  },
  {
    "url": "mx/tojolabal/grammar/adjective/index.html",
    "revision": "9b06bb37477e6242bed5d77481bfc2da"
  },
  {
    "url": "mx/tojolabal/grammar/adverb/index.html",
    "revision": "05f742f22d799e9322bb5bba52c786fd"
  },
  {
    "url": "mx/tojolabal/grammar/alphabet/index.html",
    "revision": "844389b422b5cc7090c7866a05760d1b"
  },
  {
    "url": "mx/tojolabal/grammar/article/index.html",
    "revision": "5d2ed2c77a126b9e8d1a62f8e01a5b08"
  },
  {
    "url": "mx/tojolabal/grammar/guide/index.html",
    "revision": "252861920fcf1b33226a8cbf9df96f1e"
  },
  {
    "url": "mx/tojolabal/grammar/verbs/index.html",
    "revision": "edff14499750635fc0ee91ea735ee350"
  },
  {
    "url": "mx/tojolabal/index.html",
    "revision": "4d43aacda28b1d5c201a98ab01a3198b"
  },
  {
    "url": "mx/tojolabal/vocabulary/animals/index.html",
    "revision": "cc380803a636b250dae9ca3f7557889a"
  },
  {
    "url": "mx/tojolabal/vocabulary/greetings/index.html",
    "revision": "3e3616fab1f6a42f94346e7aad2d3155"
  },
  {
    "url": "mx/tojolabal/vocabulary/more_used/index.html",
    "revision": "c7077459e4b0c7bef26f477d299b32df"
  },
  {
    "url": "mx/tojolabal/vocabulary/people/index.html",
    "revision": "a7a5167b5abfddb70928616fe39a1a17"
  },
  {
    "url": "mx/tojolabal/vocabulary/phrases/index.html",
    "revision": "5ae798edba7ca36fef4b2ac8076212ab"
  },
  {
    "url": "mx/triqui/courses/basic/index.html",
    "revision": "a5a008c8a825acc157a50212ea705233"
  },
  {
    "url": "mx/triqui/courses/intermediate/index.html",
    "revision": "5bb4fc0949f332ab4ecf94642a158946"
  },
  {
    "url": "mx/triqui/dictionary/glossary.html",
    "revision": "903d963223482bef52eae44cac2375d5"
  },
  {
    "url": "mx/triqui/dictionary/index.html",
    "revision": "23c8cef02a364e34cee3cb8f8d3720f9"
  },
  {
    "url": "mx/triqui/grammar/adjective/index.html",
    "revision": "9eafe8e6fb154febaf0c1b324826685d"
  },
  {
    "url": "mx/triqui/grammar/adverb/index.html",
    "revision": "6b979f52a326be05bd3b48e8cb3a2ae9"
  },
  {
    "url": "mx/triqui/grammar/alphabet/index.html",
    "revision": "2bc30059dd7d8adaf153b740a4837fa1"
  },
  {
    "url": "mx/triqui/grammar/article/index.html",
    "revision": "3e965b1c43eea3ca101dd1b6ea153a55"
  },
  {
    "url": "mx/triqui/grammar/guide/index.html",
    "revision": "b3952a08095653fd01dc56bbcc8b7745"
  },
  {
    "url": "mx/triqui/grammar/verbs/index.html",
    "revision": "4be3192dc6f54e7bcb24622154488c65"
  },
  {
    "url": "mx/triqui/index.html",
    "revision": "b889b31458f42f41f823b60fbfd7628e"
  },
  {
    "url": "mx/triqui/vocabulary/animals/index.html",
    "revision": "5102d953557cac39a30a226cb4d134b1"
  },
  {
    "url": "mx/triqui/vocabulary/greetings/index.html",
    "revision": "e01743c6b7b7c3c90e4b5d473684579e"
  },
  {
    "url": "mx/triqui/vocabulary/more_used/index.html",
    "revision": "f90cb84eec02e2f1ee22bff56332655d"
  },
  {
    "url": "mx/triqui/vocabulary/people/index.html",
    "revision": "1d081964b5f6153b21343da184966e1b"
  },
  {
    "url": "mx/triqui/vocabulary/phrases/index.html",
    "revision": "73577434d598f9b6ae098df251441d55"
  },
  {
    "url": "mx/tseltal/courses/basic/index.html",
    "revision": "dff8688d0cd5f300cb64ec1cd080395b"
  },
  {
    "url": "mx/tseltal/courses/intermediate/index.html",
    "revision": "34fc7edd1a3f4fd482b088ecb97a3349"
  },
  {
    "url": "mx/tseltal/dictionary/glossary.html",
    "revision": "254d3784676886fd94f634736c695638"
  },
  {
    "url": "mx/tseltal/dictionary/index.html",
    "revision": "d05829b3fcce4bc7942d95aa32bfb9f9"
  },
  {
    "url": "mx/tseltal/grammar/adjective/index.html",
    "revision": "e562d7d13f01e037c44510184ae3d6a1"
  },
  {
    "url": "mx/tseltal/grammar/adverb/index.html",
    "revision": "d37f3ca608c587371676c24b054b5546"
  },
  {
    "url": "mx/tseltal/grammar/alphabet/index.html",
    "revision": "2496d3015c63bfa266a1513b4d38c15d"
  },
  {
    "url": "mx/tseltal/grammar/article/index.html",
    "revision": "aeefe4c61f35b5e3e8a0b862b2fef723"
  },
  {
    "url": "mx/tseltal/grammar/guide/index.html",
    "revision": "473445cc450dcc03a1efc1e9b5708ad7"
  },
  {
    "url": "mx/tseltal/grammar/verbs/index.html",
    "revision": "a8eeaf886675df0f013a1a91d92e983b"
  },
  {
    "url": "mx/tseltal/index.html",
    "revision": "e731cfb8c02503ad94c00d57f3463733"
  },
  {
    "url": "mx/tseltal/vocabulary/animals/index.html",
    "revision": "d2d4ee89ff7950efadd7c3d633dd07c2"
  },
  {
    "url": "mx/tseltal/vocabulary/greetings/index.html",
    "revision": "430ac42590aa0a88dd9ec1852bd8b2cb"
  },
  {
    "url": "mx/tseltal/vocabulary/more_used/index.html",
    "revision": "605c1f9bbc4922ada3f470dfbc5f81a3"
  },
  {
    "url": "mx/tseltal/vocabulary/people/index.html",
    "revision": "87b4837a058a21769ac8eed3f5874079"
  },
  {
    "url": "mx/tseltal/vocabulary/phrases/index.html",
    "revision": "12da51a524114fef71e006482a9c3723"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
