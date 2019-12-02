import React from 'react';

class StaticActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentActivity: this.props.activity
    };
    this.getContent = this.getContent.bind(this);
  }

  getContent(activity) {
    const contentObject = {
      heroClass: null,
      content: {
        text1: null,
        img1: null,
        imgAlt: null,
        text2: null
      }
    };

    switch (this.state.currentActivity) {
      case 'Wine and Paint':
        contentObject.heroClass = 'wine-and-paint-hero';
        contentObject.content.text1 = 'Tempus iaculis urna id volutpat lacus laoreet. Elit eget gravida cum sociis. Ornare aenean euismod elementum nisi quis eleifend. Sapien nec sagittis aliquam malesuada bibendum arcu. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. At urna condimentum mattis pellentesque id nibh. Cras fermentum odio eu feugiat. Suspendisse faucibus interdum posuere lorem. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Auctor elit sed vulputate mi. Morbi enim nunc faucibus a pellentesque sit amet porttitor eget. Pretium lectus quam id leo. Etiam sit amet nisl purus in mollis nunc sed.';
        contentObject.content.img1 = '/assets/images/static/paint-img-1.jpg';
        contentObject.imgAlt = 'Abstract painting';
        contentObject.content.text2 = 'Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Pretium nibh ipsum consequat nisl vel. Pretium fusce id velit ut. Nunc pulvinar sapien et ligula. Ipsum consequat nisl vel pretium lectus quam id leo in. Habitant morbi tristique senectus et netus et malesuada fames ac. Elit at imperdiet dui accumsan sit amet nulla. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Arcu felis bibendum ut tristique et. In mollis nunc sed id semper risus in. Tortor posuere ac ut consequat semper viverra nam libero. Eu tincidunt tortor aliquam nulla facilisi cras fermentum. Sit amet est placerat in. Aliquam faucibus purus in massa tempor nec. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Pellentesque elit eget gravida cum. Varius duis at consectetur lorem donec massa sapien faucibus. Euismod in pellentesque massa placerat duis. Vivamus at augue eget arcu dictum varius duis at.';
        break;
      case 'Pickup Basketball':
        contentObject.heroClass = 'pickup-basketball-hero';
        contentObject.content.text1 = 'Arcu cursus euismod quis viverra nibh. Pretium lectus quam id leo in vitae turpis massa. Integer feugiat scelerisque varius morbi enim nunc. Pharetra convallis posuere morbi leo. Tellus integer feugiat scelerisque varius. Massa sapien faucibus et molestie ac. Tristique magna sit amet purus gravida. Mi in nulla posuere sollicitudin aliquam ultrices. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Etiam tempor orci eu lobortis elementum nibh. A lacus vestibulum sed arcu non odio euismod. Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse.';
        contentObject.content.img1 = '/assets/images/static/basketball-img-1.jpg';
        contentObject.imgAlt = 'Empty Basketball Court';
        contentObject.content.text2 = 'Eget est lorem ipsum dolor sit amet consectetur. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Pulvinar pellentesque habitant morbi tristique senectus et netus et. Aliquam sem fringilla ut morbi tincidunt augue interdum. Molestie ac feugiat sed lectus. Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. Tellus molestie nunc non blandit massa. Molestie nunc non blandit massa enim nec. Sit amet mauris commodo quis imperdiet massa. Sit amet nisl purus in mollis nunc. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Ultricies integer quis auctor elit sed vulputate mi. At augue eget arcu dictum varius duis at consectetur. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing. Risus quis varius quam quisque id diam. Ac tincidunt vitae semper quis lectus nulla at volutpat.';
        break;
      case 'Yoga':
        contentObject.heroClass = 'yoga-hero';
        contentObject.content.text1 = 'Aliquet risus feugiat in ante metus dictum at tempor. Amet venenatis urna cursus eget nunc scelerisque viverra. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Ut tellus elementum sagittis vitae et leo. Molestie nunc non blandit massa enim. Habitant morbi tristique senectus et netus et. Placerat vestibulum lectus mauris ultrices eros in cursus. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Egestas erat imperdiet sed euismod nisi porta lorem. Id donec ultrices tincidunt arcu non sodales neque sodales. Id aliquet risus feugiat in ante metus. Feugiat pretium nibh ipsum consequat nisl vel. Sapien nec sagittis aliquam malesuada bibendum.';
        contentObject.content.img1 = '/assets/images/static/yoga-img-1.jpg';
        contentObject.imgAlt = 'Woman doing yoga in peaceful setting';
        contentObject.content.text2 = 'Sit amet porttitor eget dolor. Dictum at tempor commodo ullamcorper. Aenean vel elit scelerisque mauris. Semper risus in hendrerit gravida rutrum. Risus feugiat in ante metus. Scelerisque felis imperdiet proin fermentum. Urna et pharetra pharetra massa massa ultricies mi. Mi bibendum neque egestas congue quisque egestas diam. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Eget sit amet tellus cras adipiscing. Ac tortor dignissim convallis aenean et tortor at risus. Amet nisl suscipit adipiscing bibendum est ultricies. Ut faucibus pulvinar elementum integer enim. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin. Praesent tristique magna sit amet.';
        break;
      case 'Parasailing':
        contentObject.heroClass = 'parasailing-hero';
        contentObject.content.text1 = 'Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Etiam dignissim diam quis enim lobortis scelerisque. Nulla facilisi etiam dignissim diam quis enim. Pretium fusce id velit ut tortor pretium viverra suspendisse. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Duis at tellus at urna condimentum mattis pellentesque id. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Sit amet nisl purus in mollis nunc sed id. Congue eu consequat ac felis donec et odio pellentesque diam. Duis ut diam quam nulla porttitor massa id neque aliquam. Mauris vitae ultricies leo integer malesuada nunc vel risus. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. Ut eu sem integer vitae justo eget magna fermentum iaculis.';
        contentObject.content.img1 = '/assets/images/static/parasail-img-1.jpg';
        contentObject.imgAlt = 'People parasailing along the beach';
        contentObject.content.text2 = 'Ornare suspendisse sed nisi lacus sed viverra tellus in hac. Ultricies lacus sed turpis tincidunt id aliquet risus. Odio morbi quis commodo odio aenean sed. Rhoncus urna neque viverra justo. Varius vel pharetra vel turpis nunc eget lorem. Varius quam quisque id diam vel quam elementum. Id cursus metus aliquam eleifend mi in. Nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus at urna condimentum mattis pellentesque id nibh. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci. Vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Amet volutpat consequat mauris nunc congue nisi. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl.';
        break;
    }

    return contentObject;
  }

  render() {
    const allContent = this.getContent(this.state.currentActivity);
    return (
      <div>
        <div className={`${allContent.heroClass} top-banner d-flex`}>
          <div className="m-auto p-3">
            <h2 className="text-center text-white">{this.state.currentActivity}</h2>
          </div>
        </div>
        <div className="container-fluid my-5">
          <p>{allContent.content.text1}</p>
          <img src={allContent.content.img1} alt={allContent.content.imgAlt} className="img-fluid my-5" />
          <p>{allContent.content.text2}</p>
        </div>
      </div>
    );
  }
}

export default StaticActivity;
