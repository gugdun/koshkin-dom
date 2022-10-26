gdjs.Level2Code = {};
gdjs.Level2Code.GDPlayerObjects1= [];
gdjs.Level2Code.GDPlayerObjects2= [];
gdjs.Level2Code.GDPlayerObjects3= [];
gdjs.Level2Code.GDPlatformObjects1= [];
gdjs.Level2Code.GDPlatformObjects2= [];
gdjs.Level2Code.GDPlatformObjects3= [];
gdjs.Level2Code.GDPlatform2Objects1= [];
gdjs.Level2Code.GDPlatform2Objects2= [];
gdjs.Level2Code.GDPlatform2Objects3= [];
gdjs.Level2Code.GDTriggerObjects1= [];
gdjs.Level2Code.GDTriggerObjects2= [];
gdjs.Level2Code.GDTriggerObjects3= [];
gdjs.Level2Code.GDMaksObjects1= [];
gdjs.Level2Code.GDMaksObjects2= [];
gdjs.Level2Code.GDMaksObjects3= [];
gdjs.Level2Code.GDCloud1Objects1= [];
gdjs.Level2Code.GDCloud1Objects2= [];
gdjs.Level2Code.GDCloud1Objects3= [];
gdjs.Level2Code.GDCloud2Objects1= [];
gdjs.Level2Code.GDCloud2Objects2= [];
gdjs.Level2Code.GDCloud2Objects3= [];
gdjs.Level2Code.GDBush1Objects1= [];
gdjs.Level2Code.GDBush1Objects2= [];
gdjs.Level2Code.GDBush1Objects3= [];
gdjs.Level2Code.GDBush2Objects1= [];
gdjs.Level2Code.GDBush2Objects2= [];
gdjs.Level2Code.GDBush2Objects3= [];
gdjs.Level2Code.GDFlower1Objects1= [];
gdjs.Level2Code.GDFlower1Objects2= [];
gdjs.Level2Code.GDFlower1Objects3= [];
gdjs.Level2Code.GDFlower2Objects1= [];
gdjs.Level2Code.GDFlower2Objects2= [];
gdjs.Level2Code.GDFlower2Objects3= [];
gdjs.Level2Code.GDFenceObjects1= [];
gdjs.Level2Code.GDFenceObjects2= [];
gdjs.Level2Code.GDFenceObjects3= [];
gdjs.Level2Code.GDLoveCoinObjects1= [];
gdjs.Level2Code.GDLoveCoinObjects2= [];
gdjs.Level2Code.GDLoveCoinObjects3= [];
gdjs.Level2Code.GDLoveMeterObjects1= [];
gdjs.Level2Code.GDLoveMeterObjects2= [];
gdjs.Level2Code.GDLoveMeterObjects3= [];
gdjs.Level2Code.GDLovePowerObjects1= [];
gdjs.Level2Code.GDLovePowerObjects2= [];
gdjs.Level2Code.GDLovePowerObjects3= [];
gdjs.Level2Code.GDWhereCatObjects1= [];
gdjs.Level2Code.GDWhereCatObjects2= [];
gdjs.Level2Code.GDWhereCatObjects3= [];
gdjs.Level2Code.GDCantFindObjects1= [];
gdjs.Level2Code.GDCantFindObjects2= [];
gdjs.Level2Code.GDCantFindObjects3= [];

gdjs.Level2Code.conditionTrue_0 = {val:false};
gdjs.Level2Code.condition0IsTrue_0 = {val:false};
gdjs.Level2Code.condition1IsTrue_0 = {val:false};
gdjs.Level2Code.condition2IsTrue_0 = {val:false};
gdjs.Level2Code.conditionTrue_1 = {val:false};
gdjs.Level2Code.condition0IsTrue_1 = {val:false};
gdjs.Level2Code.condition1IsTrue_1 = {val:false};
gdjs.Level2Code.condition2IsTrue_1 = {val:false};


gdjs.Level2Code.eventsList0 = function(runtimeScene) {

{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].flipX(true);
}
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Left");
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].setAnimation(0);
}
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].flipX(false);
}
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Right");
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects2);

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level2Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDPlayerObjects2[k] = gdjs.Level2Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerObjects2.length = k;}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].setAnimation(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects2);

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.Level2Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDPlayerObjects2[k] = gdjs.Level2Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerObjects2.length = k;}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects1);

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDPlayerObjects1[k] = gdjs.Level2Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerObjects1.length = k;}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects1[i].setAnimation(2);
}
}}

}


};gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDLoveCoinObjects1Objects = Hashtable.newFrom({"LoveCoin": gdjs.Level2Code.GDLoveCoinObjects1});
gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level2Code.GDPlayerObjects1});
gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level2Code.GDPlayerObjects1});
gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDTriggerObjects1Objects = Hashtable.newFrom({"Trigger": gdjs.Level2Code.GDTriggerObjects1});
gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level2Code.GDPlayerObjects1});
gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDTriggerObjects1Objects = Hashtable.newFrom({"Trigger": gdjs.Level2Code.GDTriggerObjects1});
gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level2Code.GDPlayerObjects1});
gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDTriggerObjects1Objects = Hashtable.newFrom({"Trigger": gdjs.Level2Code.GDTriggerObjects1});
gdjs.Level2Code.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.Level2Code.eventsList0(runtimeScene);
}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("LoveCoin"), gdjs.Level2Code.GDLoveCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects1);

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDLoveCoinObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDLoveCoinObjects1 */
gdjs.copyArray(runtimeScene.getObjects("LoveMeter"), gdjs.Level2Code.GDLoveMeterObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.Level2Code.GDLoveCoinObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDLoveCoinObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level2Code.GDLoveMeterObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDLoveMeterObjects1[i].setWidth(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) * 16);
}
}}

}


{



}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Level2Code.GDPlayerObjects1.length !== 0 ? gdjs.Level2Code.GDPlayerObjects1[0] : null), true, "", 0);
}{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), "Background", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), "Background", 0);
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CantFind"), gdjs.Level2Code.GDCantFindObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trigger"), gdjs.Level2Code.GDTriggerObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhereCat"), gdjs.Level2Code.GDWhereCatObjects1);
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "GameUI", 0, 0);
}{for(var i = 0, len = gdjs.Level2Code.GDTriggerObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDTriggerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level2Code.GDWhereCatObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDWhereCatObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level2Code.GDCantFindObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDCantFindObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LoveMeter"), gdjs.Level2Code.GDLoveMeterObjects1);

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDLoveMeterObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDLoveMeterObjects1[i].isVisible() ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDLoveMeterObjects1[k] = gdjs.Level2Code.GDLoveMeterObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDLoveMeterObjects1.length = k;}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDLoveMeterObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDLoveMeterObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDLoveMeterObjects1[i].setWidth(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) * 16);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trigger"), gdjs.Level2Code.GDTriggerObjects1);

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition0IsTrue_0;
gdjs.Level2Code.condition0IsTrue_1.val = false;
gdjs.Level2Code.condition1IsTrue_1.val = false;
{
gdjs.Level2Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDTriggerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level2Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDTriggerObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDTriggerObjects1[i].getVariableString(gdjs.Level2Code.GDTriggerObjects1[i].getVariables().get("id")) == "where_cat" ) {
        gdjs.Level2Code.condition1IsTrue_1.val = true;
        gdjs.Level2Code.GDTriggerObjects1[k] = gdjs.Level2Code.GDTriggerObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDTriggerObjects1.length = k;}}
gdjs.Level2Code.conditionTrue_1.val = true && gdjs.Level2Code.condition0IsTrue_1.val && gdjs.Level2Code.condition1IsTrue_1.val;
}
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("WhereCat"), gdjs.Level2Code.GDWhereCatObjects1);
{for(var i = 0, len = gdjs.Level2Code.GDWhereCatObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDWhereCatObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trigger"), gdjs.Level2Code.GDTriggerObjects1);

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition0IsTrue_0;
gdjs.Level2Code.condition0IsTrue_1.val = false;
gdjs.Level2Code.condition1IsTrue_1.val = false;
{
gdjs.Level2Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDTriggerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level2Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDTriggerObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDTriggerObjects1[i].getVariableString(gdjs.Level2Code.GDTriggerObjects1[i].getVariables().get("id")) == "cant_find" ) {
        gdjs.Level2Code.condition1IsTrue_1.val = true;
        gdjs.Level2Code.GDTriggerObjects1[k] = gdjs.Level2Code.GDTriggerObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDTriggerObjects1.length = k;}}
gdjs.Level2Code.conditionTrue_1.val = true && gdjs.Level2Code.condition0IsTrue_1.val && gdjs.Level2Code.condition1IsTrue_1.val;
}
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CantFind"), gdjs.Level2Code.GDCantFindObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhereCat"), gdjs.Level2Code.GDWhereCatObjects1);
{for(var i = 0, len = gdjs.Level2Code.GDWhereCatObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDWhereCatObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level2Code.GDCantFindObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDCantFindObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trigger"), gdjs.Level2Code.GDTriggerObjects1);

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition0IsTrue_0;
gdjs.Level2Code.condition0IsTrue_1.val = false;
gdjs.Level2Code.condition1IsTrue_1.val = false;
{
gdjs.Level2Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDTriggerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level2Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDTriggerObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDTriggerObjects1[i].getVariableString(gdjs.Level2Code.GDTriggerObjects1[i].getVariables().get("id")) == "next_level" ) {
        gdjs.Level2Code.condition1IsTrue_1.val = true;
        gdjs.Level2Code.GDTriggerObjects1[k] = gdjs.Level2Code.GDTriggerObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDTriggerObjects1.length = k;}}
gdjs.Level2Code.conditionTrue_1.val = true && gdjs.Level2Code.condition0IsTrue_1.val && gdjs.Level2Code.condition1IsTrue_1.val;
}
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Outro", false);
}}

}


};

gdjs.Level2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level2Code.GDPlayerObjects1.length = 0;
gdjs.Level2Code.GDPlayerObjects2.length = 0;
gdjs.Level2Code.GDPlayerObjects3.length = 0;
gdjs.Level2Code.GDPlatformObjects1.length = 0;
gdjs.Level2Code.GDPlatformObjects2.length = 0;
gdjs.Level2Code.GDPlatformObjects3.length = 0;
gdjs.Level2Code.GDPlatform2Objects1.length = 0;
gdjs.Level2Code.GDPlatform2Objects2.length = 0;
gdjs.Level2Code.GDPlatform2Objects3.length = 0;
gdjs.Level2Code.GDTriggerObjects1.length = 0;
gdjs.Level2Code.GDTriggerObjects2.length = 0;
gdjs.Level2Code.GDTriggerObjects3.length = 0;
gdjs.Level2Code.GDMaksObjects1.length = 0;
gdjs.Level2Code.GDMaksObjects2.length = 0;
gdjs.Level2Code.GDMaksObjects3.length = 0;
gdjs.Level2Code.GDCloud1Objects1.length = 0;
gdjs.Level2Code.GDCloud1Objects2.length = 0;
gdjs.Level2Code.GDCloud1Objects3.length = 0;
gdjs.Level2Code.GDCloud2Objects1.length = 0;
gdjs.Level2Code.GDCloud2Objects2.length = 0;
gdjs.Level2Code.GDCloud2Objects3.length = 0;
gdjs.Level2Code.GDBush1Objects1.length = 0;
gdjs.Level2Code.GDBush1Objects2.length = 0;
gdjs.Level2Code.GDBush1Objects3.length = 0;
gdjs.Level2Code.GDBush2Objects1.length = 0;
gdjs.Level2Code.GDBush2Objects2.length = 0;
gdjs.Level2Code.GDBush2Objects3.length = 0;
gdjs.Level2Code.GDFlower1Objects1.length = 0;
gdjs.Level2Code.GDFlower1Objects2.length = 0;
gdjs.Level2Code.GDFlower1Objects3.length = 0;
gdjs.Level2Code.GDFlower2Objects1.length = 0;
gdjs.Level2Code.GDFlower2Objects2.length = 0;
gdjs.Level2Code.GDFlower2Objects3.length = 0;
gdjs.Level2Code.GDFenceObjects1.length = 0;
gdjs.Level2Code.GDFenceObjects2.length = 0;
gdjs.Level2Code.GDFenceObjects3.length = 0;
gdjs.Level2Code.GDLoveCoinObjects1.length = 0;
gdjs.Level2Code.GDLoveCoinObjects2.length = 0;
gdjs.Level2Code.GDLoveCoinObjects3.length = 0;
gdjs.Level2Code.GDLoveMeterObjects1.length = 0;
gdjs.Level2Code.GDLoveMeterObjects2.length = 0;
gdjs.Level2Code.GDLoveMeterObjects3.length = 0;
gdjs.Level2Code.GDLovePowerObjects1.length = 0;
gdjs.Level2Code.GDLovePowerObjects2.length = 0;
gdjs.Level2Code.GDLovePowerObjects3.length = 0;
gdjs.Level2Code.GDWhereCatObjects1.length = 0;
gdjs.Level2Code.GDWhereCatObjects2.length = 0;
gdjs.Level2Code.GDWhereCatObjects3.length = 0;
gdjs.Level2Code.GDCantFindObjects1.length = 0;
gdjs.Level2Code.GDCantFindObjects2.length = 0;
gdjs.Level2Code.GDCantFindObjects3.length = 0;

gdjs.Level2Code.eventsList1(runtimeScene);

return;

}

gdjs['Level2Code'] = gdjs.Level2Code;
