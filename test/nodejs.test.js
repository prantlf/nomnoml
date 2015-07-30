// Writes a testing PNG diagram to the standard output
// Usage: node nodejs.test.js > piracy.png
var Canvas = require('canvas'),
    nomnoml = require('../dist/nomnoml'),
    canvas = new Canvas(640, 480),
    source = '\
      [Pirate|eyeCount: Int|raid();pillage()|\n\
          [beard]--[parrot]\n\
          [beard]-:>[foul mouth]\n\
      ]\n\
      \n\
      [<abstract>Marauder]<:--[Pirate]\n\
      [Pirate]- 0..7[mischief]\n\
      [jollyness]->[Pirate]\n\
      [jollyness]->[rum]\n\
      [jollyness]->[singing]\n\
      [Pirate]-> *[rum|tastiness: Int|swig()]\n\
      [Pirate]->[singing]\n\
      [singing]<->[rum]\n\
      \n\
      [<start>st]->[<state>plunder]\n\
      [plunder]->[<choice>more loot]\n\
      [more loot]->[st]\n\
      [more loot] no ->[<end>e]\n';
nomnoml.draw(canvas, source);
canvas.pngStream().pipe(process.stdout);
