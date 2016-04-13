/*
 * Copyright 2016 Resin.io
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

/**
 * @module Etcher.Components.DriveSelector
 */

const angular = require('angular');
require('angular-ui-bootstrap');

const MODULE_NAME = 'Etcher.Components.DriveSelector';
const DriveSelector = angular.module(MODULE_NAME, [
  'ui.bootstrap',
  require('../../../browser/modules/drive-scanner'),
  require('../../../browser/models/selection-state')
]);

DriveSelector.controller('DriveSelectorController', require('./controllers/drive-selector'));
DriveSelector.service('DriveSelectorStateService', require('./services/drive-selector-state'));
DriveSelector.service('DriveSelectorService', require('./services/drive-selector'));

module.exports = MODULE_NAME;