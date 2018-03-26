/// <reference path="../../typings/index.d.ts" />
import vdogg = dogsrus.virtdog;

describe('In the file masterController.ts', () => {
    describe('the masterController\'s', () => {
        let sut: vdogg.MasterController,
            $rootScope: ng.IRootScopeService, 
            $controller: ng.IComponentControllerService,
            eventNames: vdogg.EventNames,
            masterControllerParams: {
                $rootScope: ng.IRootScopeService;
                eventNames: vdogg.EventNames
            };
        beforeEach(() => {
            angular.mock.module('app.people');
            inject(($injector: ng.auto.IInjectorService) => {
                $controller = $injector.get<ng.IControllerService>('$controller');
                $rootScope = $injector.get<ng.IRootScopeService>('$rootScope');
                masterControllerParams = {
                    $rootScope: $rootScope,
                    eventNames: vdogg.eventNames
                };
            });
            sut = $controller<vdogg.MasterController>('masterController', masterControllerParams);
        });
        describe('constructor', () => {
            
        });
        describe('throwSomething method', () => {
            
        });
        describe('feedTheDog method', () => {
            
        });
    });
    describe('the MasterAction object\'s constructor', () => {
        
    });
})