import * as THREE from 'three';
import metaversefile from 'metaversefile';

import { getFireflies } from './fireflies.js';
import { getButterflies } from './butterflies.js';


const {useLocalPlayer, useInternals} = metaversefile;

export class EnvironmentalVfx {
  constructor(app) {
    this.app = app;
    this.environmentalObjects = [];
    
    this.player = useLocalPlayer();
    this.camera = useInternals().camera;

    this.butterflies = getButterflies(10, this.player);
    this.app.add(this.butterflies);

    
    this.fireflies = getFireflies(50, this.player,  this.camera);
    this.app.add(this.fireflies);


  }
  
  update(timestamp) {
    this.butterflies.update(timestamp);
    this.fireflies.update(timestamp);
  }
}