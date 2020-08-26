import React from "react";
import PropTypes from "prop-types";
import Link from 'next/link'
import {Grid,Hidden} from "@material-ui/core";

const VERTICAL_BANNER_IMAGES = {
  DungeonsAndDragons:
    "https://www.dropbox.com/s/531ie6uyj61c70g/VerticalDnD.webp?raw=1",
  Starfinder:
    "https://www.dropbox.com/s/dcejv24bg4q4x37/VerticalStarfinder.webp?raw=1",
  Pathfinder:
    "https://www.dropbox.com/s/kd6uu3wlc6sgevq/VerticalPathfinder.webp?raw=1",
  Pathfinder2:
    "https://www.dropbox.com/s/86p1udxbq4jzvf6/VerticalPathfinder2.webp?raw=1"
};

const HORIZONTAL_BANNER_IMAGES = {
  DungeonsAndDragons:
    "https://www.dropbox.com/s/ycio6qczppg586r/HorizontalDnD.webp?raw=1",
  Starfinder:
    "https://www.dropbox.com/s/xdvvp1ceeov9v3b/HorizontalStarfinder.webp?raw=1",
  Pathfinder:
    "https://www.dropbox.com/s/7qdr7sdh5sykqdc/HorizontalPathfinder.webp?raw=1",
  Pathfinder2:
    "https://www.dropbox.com/s/2edvcuse7sd4ywb/HorizontalPathfinder2.webp?raw=1"
};

const VERTICAL_BANNER = Object.keys(VERTICAL_BANNER_IMAGES);
const HORIZONTAL_BANNER = Object.keys(HORIZONTAL_BANNER_IMAGES);

//        <A href={hbanner}> </A>

const  Banner = () => {
  let horizontalImage = hbanner => {
    return (
      <Grid container direction="column" item={true} xs={12} key={'hBanner'+ hbanner}>
        <Link href="/[hbanner]" as={`/${hbanner}`}>
          <img
            className="HBanner"
            alt={hbanner}
            src={HORIZONTAL_BANNER_IMAGES[hbanner]}
          />
        </Link>
      </Grid>
    );
  };

  let verticalImage = vbanner => {
    return (
      <Grid container direction="row" alignItems="center" item={true} sm={2} key={'vBanner'+ vbanner}>
         <Link href="/[vbanner]" as={`/${vbanner}`}>
          <img
            className="VBanner"
            alt={vbanner}
            src={VERTICAL_BANNER_IMAGES[vbanner]}
          />
        </Link>
      </Grid>
    );
  };

  return (
    <Grid>
      <Hidden only={["xs", "sm"]}>
        <Grid
          spacing={1}
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          {VERTICAL_BANNER.map(verticalImage)}
        </Grid>
      </Hidden>
      <Hidden only={["lg", "md", "xl"]}>
        <Grid
          spacing={12}
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          {HORIZONTAL_BANNER.map(horizontalImage)}
        </Grid>
      </Hidden>
    </Grid>
  );
}

Banner.propTypes = {
  hBanner: PropTypes.oneOf(HORIZONTAL_BANNER),
  vBanner: PropTypes.oneOf(VERTICAL_BANNER)
};

export {Banner}