'use strict'

require('./_game-pad.scss')

require('angular')
.module('ngAdventure')
.component('gamePad', {
  template: require('./game-pad.html'),
  controllerAs: 'gamepadCtrl',
  controller: ['$log', 'playerService', function($log, playerService) {
    this.$onInit = () => {
      $log.debug('#gamepadCtrl');
      
      this.directions = ['north', 'south', 'east', 'west']
      this.moveDirection = this.directions[0]

      this.movePlayer = function() {
        playerService.movePlayer(this.moveDirection)
        .then(location => {
          $log.log(`player currently at: ${location}`)
        })
        .catch($log.error)
      }
    }
  }]
})
