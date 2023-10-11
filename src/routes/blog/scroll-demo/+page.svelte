<div id="progress"></div>
<article class="content">
  <h1>Virtual Reality</h1>
  <p>Virtual reality (VR) is a simulated experience that employs pose tracking and 3D near-eye displays to give the user an immersive feel of a virtual world. Applications of virtual reality include entertainment (particularly video games), education (such as medical or military training) and business (such as virtual meetings). Other distinct types of VR-style technology include augmented reality and mixed reality, sometimes referred to as extended reality or XR, although definitions are currently changing due to the nascence of the industry.</p>
  <p>Currently, standard virtual reality systems use either virtual reality headsets or multi-projected environments to generate some realistic images, sounds and other sensations that simulate a user's physical presence in a virtual environment. A person using virtual reality equipment is able to look around the artificial world, move around in it, and interact with virtual features or items. The effect is commonly created by VR headsets consisting of a head-mounted display with a small screen in front of the eyes, but can also be created through specially designed rooms with multiple large screens. Virtual reality typically incorporates auditory and video feedback, but may also allow other types of sensory and force feedback through haptic technology.</p>
  <img src="/images/vr/post-1.jpg" alt="Some dude with VR" />

  <h2>Etymology</h2>
  <p>"Virtual" has had the meaning of "being something in essence or effect, though not actually or in fact" since the mid-1400s. The term "virtual" has been used in the computer sense of "not physically existing but made to appear by software" since 1959.</p>
  <p>In 1938, French avant-garde playwright Antonin Artaud described the illusory nature of characters and objects in the theatre as "la réalité virtuelle" in a collection of essays, Le Théâtre et son double. The English translation of this book, published in 1958 as The Theater and its Double, is the earliest published use of the term "virtual reality". The term "artificial reality", coined by Myron Krueger, has been in use since the 1970s. The term "virtual reality" was first used in a science fiction context in The Judas Mandala, a 1982 novel by Damien Broderick.</p>
  <div class="gallery">
    <div class="scroll-container">
      <div class="slide"><img src="/images/vr/slide-1.jpg" alt="slide 1" /></div>
      <div class="slide"><img src="/images/vr/slide-2.jpg" alt="slide 2" /></div>
      <div class="slide"><img src="/images/vr/slide-3.jpg" alt="slide 3" /></div>
      <div class="slide"><img src="/images/vr/slide-4.jpg" alt="slide 4" /></div>
      <div class="slide"><img src="/images/vr/slide-5.jpg" alt="slide 5" /></div>
    </div>
  </div>
  <p>Widespread adoption of the term "virtual reality" in the popular media is attributed to Jaron Lanier, who in the late 1980s designed some of the first business-grade virtual reality hardware under his firm VPL Research, and the 1992 film Lawnmower Man, which features use of virtual reality systems.</p>

  <h2>Technology</h2>
  <p>Modern virtual reality headset displays are based on technology developed for smartphones including: gyroscopes and motion sensors for tracking head, body, and hand positions; small HD screens for stereoscopic displays; and small, lightweight and fast computer processors. These components led to relative affordability for independent VR developers, and led to the 2012 Oculus Rift Kickstarter offering the first independently developed VR headset.[52]</p>
  <img src="/images/vr/post-2.jpg" alt="Happy with VR" />
  <p>Independent production of VR images and video has increased alongside the development of affordable omnidirectional cameras, also known as 360-degree cameras or VR cameras, that have the ability to record 360 interactive photography, although at relatively low resolutions or in highly compressed formats for online streaming of 360 video.[66] In contrast, photogrammetry is increasingly used to combine several high-resolution photographs for the creation of detailed 3D objects and environments in VR applications.[67][68]</p>
  <p>To create a feeling of immersion, special output devices are needed to display virtual worlds. Well-known formats include head-mounted displays or the CAVE. In order to convey a spatial impression, two images are generated and displayed from different perspectives (stereo projection). There are different technologies available to bring the respective image to the right eye. A distinction is made between active (e.g. shutter glasses) and passive technologies (e.g. polarizing filters or Infitec).[69]</p>

</article>

<style lang="scss">
  .gallery {
    position: relative;
    .scroll-container {
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      display: flex;
      flex-direction: row;
    }
    .slide {
      scroll-snap-align: center;
      flex: 0 0 100%;
      img {
        aspect-ratio: 16/10;
        object-fit: cover;
      }
    }
  }

  @keyframes grow-progress {
    from { transform: scaleX(0)}
    to { transform: scaleX(1)}
  }

  :global(html) {
    scroll-timeline: --page-scroll block;
  }
  #progress {
    position: fixed;
    left: 0; top: 0;
    width: 100%; height: 5px;
    background: var(--accent);
    z-index: 10;

    transform-origin: 0 50%;
    animation: grow-progress auto linear;
    animation-timeline: --page-scroll;
  }
</style>