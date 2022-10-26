gdjs.Level1Code = {};
gdjs.Level1Code.GDPlayerObjects1= [];
gdjs.Level1Code.GDPlayerObjects2= [];
gdjs.Level1Code.GDPlayerObjects3= [];
gdjs.Level1Code.GDPlatformObjects1= [];
gdjs.Level1Code.GDPlatformObjects2= [];
gdjs.Level1Code.GDPlatformObjects3= [];
gdjs.Level1Code.GDPlatform2Objects1= [];
gdjs.Level1Code.GDPlatform2Objects2= [];
gdjs.Level1Code.GDPlatform2Objects3= [];
gdjs.Level1Code.GDTriggerObjects1= [];
gdjs.Level1Code.GDTriggerObjects2= [];
gdjs.Level1Code.GDTriggerObjects3= [];
gdjs.Level1Code.GDMaksObjects1= [];
gdjs.Level1Code.GDMaksObjects2= [];
gdjs.Level1Code.GDMaksObjects3= [];
gdjs.Level1Code.GDCloud1Objects1= [];
gdjs.Level1Code.GDCloud1Objects2= [];
gdjs.Level1Code.GDCloud1Objects3= [];
gdjs.Level1Code.GDCloud2Objects1= [];
gdjs.Level1Code.GDCloud2Objects2= [];
gdjs.Level1Code.GDCloud2Objects3= [];
gdjs.Level1Code.GDBush1Objects1= [];
gdjs.Level1Code.GDBush1Objects2= [];
gdjs.Level1Code.GDBush1Objects3= [];
gdjs.Level1Code.GDBush2Objects1= [];
gdjs.Level1Code.GDBush2Objects2= [];
gdjs.Level1Code.GDBush2Objects3= [];
gdjs.Level1Code.GDFlower1Objects1= [];
gdjs.Level1Code.GDFlower1Objects2= [];
gdjs.Level1Code.GDFlower1Objects3= [];
gdjs.Level1Code.GDFlower2Objects1= [];
gdjs.Level1Code.GDFlower2Objects2= [];
gdjs.Level1Code.GDFlower2Objects3= [];
gdjs.Level1Code.GDFenceObjects1= [];
gdjs.Level1Code.GDFenceObjects2= [];
gdjs.Level1Code.GDFenceObjects3= [];
gdjs.Level1Code.GDLoveCoinObjects1= [];
gdjs.Level1Code.GDLoveCoinObjects2= [];
gdjs.Level1Code.GDLoveCoinObjects3= [];
gdjs.Level1Code.GDLoveMeterObjects1= [];
gdjs.Level1Code.GDLoveMeterObjects2= [];
gdjs.Level1Code.GDLoveMeterObjects3= [];
gdjs.Level1Code.GDLovePowerObjects1= [];
gdjs.Level1Code.GDLovePowerObjects2= [];
gdjs.Level1Code.GDLovePowerObjects3= [];
gdjs.Level1Code.GDSpaceToJumpObjects1= [];
gdjs.Level1Code.GDSpaceToJumpObjects2= [];
gdjs.Level1Code.GDSpaceToJumpObjects3= [];
gdjs.Level1Code.GDNiceObjects1= [];
gdjs.Level1Code.GDNiceObjects2= [];
gdjs.Level1Code.GDNiceObjects3= [];
gdjs.Level1Code.GDDontFallObjects1= [];
gdjs.Level1Code.GDDontFallObjects2= [];
gdjs.Level1Code.GDDontFallObjects3= [];
gdjs.Level1Code.GDCollectHeartsObjects1= [];
gdjs.Level1Code.GDCollectHeartsObjects2= [];
gdjs.Level1Code.GDCollectHeartsObjects3= [];
gdjs.Level1Code.GDGoodJobObjects1= [];
gdjs.Level1Code.GDGoodJobObjects2= [];
gdjs.Level1Code.GDGoodJobObjects3= [];
gdjs.Level1Code.GDMustJumpObjects1= [];
gdjs.Level1Code.GDMustJumpObjects2= [];
gdjs.Level1Code.GDMustJumpObjects3= [];
gdjs.Level1Code.GDLoveWorldObjects1= [];
gdjs.Level1Code.GDLoveWorldObjects2= [];
gdjs.Level1Code.GDLoveWorldObjects3= [];
gdjs.Level1Code.GDKotDownObjects1= [];
gdjs.Level1Code.GDKotDownObjects2= [];
gdjs.Level1Code.GDKotDownObjects3= [];

gdjs.Level1Code.conditionTrue_0 = {val:false};
gdjs.Level1Code.condition0IsTrue_0 = {val:false};
gdjs.Level1Code.condition1IsTrue_0 = {val:false};
gdjs.Level1Code.condition2IsTrue_0 = {val:false};
gdjs.Level1Code.conditionTrue_1 = {val:false};
gdjs.Level1Code.condition0IsTrue_1 = {val:false};
gdjs.Level1Code.condition1IsTrue_1 = {val:false};
gdjs.Level1Code.condition2IsTrue_1 = {val:false};


gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDLoveCoinObjects1Objects = Hashtable.newFrom({"LoveCoin": gdjs.Level1Code.GDLoveCoinObjects1});
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects1});
gdjs.Level1Code.eventsList0 = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].flipX(true);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Left");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].setAnimation(0);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].flipX(false);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Right");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDPlayerObjects2[k] = gdjs.Level1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects2.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].setAnimation(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.Level1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDPlayerObjects2[k] = gdjs.Level1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects2.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDPlayerObjects1[k] = gdjs.Level1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].setAnimation(2);
}
}}

}


};gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects1});
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDTriggerObjects1Objects = Hashtable.newFrom({"Trigger": gdjs.Level1Code.GDTriggerObjects1});
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects1});
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDTriggerObjects1Objects = Hashtable.newFrom({"Trigger": gdjs.Level1Code.GDTriggerObjects1});
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects1});
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDTriggerObjects1Objects = Hashtable.newFrom({"Trigger": gdjs.Level1Code.GDTriggerObjects1});
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects1});
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDTriggerObjects1Objects = Hashtable.newFrom({"Trigger": gdjs.Level1Code.GDTriggerObjects1});
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects1});
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDTriggerObjects1Objects = Hashtable.newFrom({"Trigger": gdjs.Level1Code.GDTriggerObjects1});
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects1});
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDTriggerObjects1Objects = Hashtable.newFrom({"Trigger": gdjs.Level1Code.GDTriggerObjects1});
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects1});
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDTriggerObjects1Objects = Hashtable.newFrom({"Trigger": gdjs.Level1Code.GDTriggerObjects1});
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects1});
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDTriggerObjects1Objects = Hashtable.newFrom({"Trigger": gdjs.Level1Code.GDTriggerObjects1});
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects1});
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDTriggerObjects1Objects = Hashtable.newFrom({"Trigger": gdjs.Level1Code.GDTriggerObjects1});
gdjs.Level1Code.eventsList1 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("LoveCoin"), gdjs.Level1Code.GDLoveCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDLoveCoinObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDLoveCoinObjects1 */
gdjs.copyArray(runtimeScene.getObjects("LoveMeter"), gdjs.Level1Code.GDLoveMeterObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.Level1Code.GDLoveCoinObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDLoveCoinObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDLoveMeterObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDLoveMeterObjects1[i].setWidth(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) * 16);
}
}}

}


{



}


{


gdjs.Level1Code.eventsList0(runtimeScene);
}


{



}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Level1Code.GDPlayerObjects1.length !== 0 ? gdjs.Level1Code.GDPlayerObjects1[0] : null), true, "", 0);
}{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), "Background", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), "Background", 0);
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CollectHearts"), gdjs.Level1Code.GDCollectHeartsObjects1);
gdjs.copyArray(runtimeScene.getObjects("DontFall"), gdjs.Level1Code.GDDontFallObjects1);
gdjs.copyArray(runtimeScene.getObjects("GoodJob"), gdjs.Level1Code.GDGoodJobObjects1);
gdjs.copyArray(runtimeScene.getObjects("MustJump"), gdjs.Level1Code.GDMustJumpObjects1);
gdjs.copyArray(runtimeScene.getObjects("Nice"), gdjs.Level1Code.GDNiceObjects1);
gdjs.copyArray(runtimeScene.getObjects("SpaceToJump"), gdjs.Level1Code.GDSpaceToJumpObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trigger"), gdjs.Level1Code.GDTriggerObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDTriggerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDTriggerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDSpaceToJumpObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSpaceToJumpObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDNiceObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDNiceObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDDontFallObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDDontFallObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDCollectHeartsObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCollectHeartsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDGoodJobObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDGoodJobObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDMustJumpObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMustJumpObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "GameUI", 0, 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platform2"), gdjs.Level1Code.GDPlatform2Objects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition0IsTrue_0;
gdjs.Level1Code.condition0IsTrue_1.val = false;
gdjs.Level1Code.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDPlatform2Objects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlatform2Objects1[i].getVariableString(gdjs.Level1Code.GDPlatform2Objects1[i].getVariables().get("id")) == "platform_1" ) {
        gdjs.Level1Code.condition0IsTrue_1.val = true;
        gdjs.Level1Code.GDPlatform2Objects1[k] = gdjs.Level1Code.GDPlatform2Objects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlatform2Objects1.length = k;}if ( gdjs.Level1Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDPlatform2Objects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlatform2Objects1[i].getX() == 1983 ) {
        gdjs.Level1Code.condition1IsTrue_1.val = true;
        gdjs.Level1Code.GDPlatform2Objects1[k] = gdjs.Level1Code.GDPlatform2Objects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlatform2Objects1.length = k;}}
gdjs.Level1Code.conditionTrue_1.val = true && gdjs.Level1Code.condition0IsTrue_1.val && gdjs.Level1Code.condition1IsTrue_1.val;
}
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDPlatform2Objects1 */
{for(var i = 0, len = gdjs.Level1Code.GDPlatform2Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlatform2Objects1[i].getBehavior("Tween").addObjectPositionTween("platform_1", 2176, -(123), "linear", 3000, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platform2"), gdjs.Level1Code.GDPlatform2Objects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition0IsTrue_0;
gdjs.Level1Code.condition0IsTrue_1.val = false;
gdjs.Level1Code.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDPlatform2Objects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlatform2Objects1[i].getVariableString(gdjs.Level1Code.GDPlatform2Objects1[i].getVariables().get("id")) == "platform_1" ) {
        gdjs.Level1Code.condition0IsTrue_1.val = true;
        gdjs.Level1Code.GDPlatform2Objects1[k] = gdjs.Level1Code.GDPlatform2Objects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlatform2Objects1.length = k;}if ( gdjs.Level1Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDPlatform2Objects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlatform2Objects1[i].getX() == 2176 ) {
        gdjs.Level1Code.condition1IsTrue_1.val = true;
        gdjs.Level1Code.GDPlatform2Objects1[k] = gdjs.Level1Code.GDPlatform2Objects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlatform2Objects1.length = k;}}
gdjs.Level1Code.conditionTrue_1.val = true && gdjs.Level1Code.condition0IsTrue_1.val && gdjs.Level1Code.condition1IsTrue_1.val;
}
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDPlatform2Objects1 */
{for(var i = 0, len = gdjs.Level1Code.GDPlatform2Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlatform2Objects1[i].getBehavior("Tween").addObjectPositionTween("platform_1", 1983, -(123), "linear", 3000, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platform2"), gdjs.Level1Code.GDPlatform2Objects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition0IsTrue_0;
gdjs.Level1Code.condition0IsTrue_1.val = false;
gdjs.Level1Code.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDPlatform2Objects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlatform2Objects1[i].getVariableString(gdjs.Level1Code.GDPlatform2Objects1[i].getVariables().get("id")) == "platform_2" ) {
        gdjs.Level1Code.condition0IsTrue_1.val = true;
        gdjs.Level1Code.GDPlatform2Objects1[k] = gdjs.Level1Code.GDPlatform2Objects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlatform2Objects1.length = k;}if ( gdjs.Level1Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDPlatform2Objects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlatform2Objects1[i].getX() == 2240 ) {
        gdjs.Level1Code.condition1IsTrue_1.val = true;
        gdjs.Level1Code.GDPlatform2Objects1[k] = gdjs.Level1Code.GDPlatform2Objects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlatform2Objects1.length = k;}}
gdjs.Level1Code.conditionTrue_1.val = true && gdjs.Level1Code.condition0IsTrue_1.val && gdjs.Level1Code.condition1IsTrue_1.val;
}
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDPlatform2Objects1 */
{for(var i = 0, len = gdjs.Level1Code.GDPlatform2Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlatform2Objects1[i].getBehavior("Tween").addObjectPositionTween("platform_2", 2431, -(123), "linear", 3000, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platform2"), gdjs.Level1Code.GDPlatform2Objects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition0IsTrue_0;
gdjs.Level1Code.condition0IsTrue_1.val = false;
gdjs.Level1Code.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDPlatform2Objects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlatform2Objects1[i].getVariableString(gdjs.Level1Code.GDPlatform2Objects1[i].getVariables().get("id")) == "platform_2" ) {
        gdjs.Level1Code.condition0IsTrue_1.val = true;
        gdjs.Level1Code.GDPlatform2Objects1[k] = gdjs.Level1Code.GDPlatform2Objects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlatform2Objects1.length = k;}if ( gdjs.Level1Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDPlatform2Objects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlatform2Objects1[i].getX() == 2431 ) {
        gdjs.Level1Code.condition1IsTrue_1.val = true;
        gdjs.Level1Code.GDPlatform2Objects1[k] = gdjs.Level1Code.GDPlatform2Objects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlatform2Objects1.length = k;}}
gdjs.Level1Code.conditionTrue_1.val = true && gdjs.Level1Code.condition0IsTrue_1.val && gdjs.Level1Code.condition1IsTrue_1.val;
}
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDPlatform2Objects1 */
{for(var i = 0, len = gdjs.Level1Code.GDPlatform2Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlatform2Objects1[i].getBehavior("Tween").addObjectPositionTween("platform_2", 2240, -(123), "linear", 3000, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trigger"), gdjs.Level1Code.GDTriggerObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition0IsTrue_0;
gdjs.Level1Code.condition0IsTrue_1.val = false;
gdjs.Level1Code.condition1IsTrue_1.val = false;
{
gdjs.Level1Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDTriggerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level1Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDTriggerObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDTriggerObjects1[i].getVariableString(gdjs.Level1Code.GDTriggerObjects1[i].getVariables().get("id")) == "fall" ) {
        gdjs.Level1Code.condition1IsTrue_1.val = true;
        gdjs.Level1Code.GDTriggerObjects1[k] = gdjs.Level1Code.GDTriggerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDTriggerObjects1.length = k;}}
gdjs.Level1Code.conditionTrue_1.val = true && gdjs.Level1Code.condition0IsTrue_1.val && gdjs.Level1Code.condition1IsTrue_1.val;
}
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trigger"), gdjs.Level1Code.GDTriggerObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition0IsTrue_0;
gdjs.Level1Code.condition0IsTrue_1.val = false;
gdjs.Level1Code.condition1IsTrue_1.val = false;
{
gdjs.Level1Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDTriggerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level1Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDTriggerObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDTriggerObjects1[i].getVariableString(gdjs.Level1Code.GDTriggerObjects1[i].getVariables().get("id")) == "space_to_jump" ) {
        gdjs.Level1Code.condition1IsTrue_1.val = true;
        gdjs.Level1Code.GDTriggerObjects1[k] = gdjs.Level1Code.GDTriggerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDTriggerObjects1.length = k;}}
gdjs.Level1Code.conditionTrue_1.val = true && gdjs.Level1Code.condition0IsTrue_1.val && gdjs.Level1Code.condition1IsTrue_1.val;
}
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SpaceToJump"), gdjs.Level1Code.GDSpaceToJumpObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDSpaceToJumpObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSpaceToJumpObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trigger"), gdjs.Level1Code.GDTriggerObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition0IsTrue_0;
gdjs.Level1Code.condition0IsTrue_1.val = false;
gdjs.Level1Code.condition1IsTrue_1.val = false;
{
gdjs.Level1Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDTriggerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level1Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDTriggerObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDTriggerObjects1[i].getVariableString(gdjs.Level1Code.GDTriggerObjects1[i].getVariables().get("id")) == "nice" ) {
        gdjs.Level1Code.condition1IsTrue_1.val = true;
        gdjs.Level1Code.GDTriggerObjects1[k] = gdjs.Level1Code.GDTriggerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDTriggerObjects1.length = k;}}
gdjs.Level1Code.conditionTrue_1.val = true && gdjs.Level1Code.condition0IsTrue_1.val && gdjs.Level1Code.condition1IsTrue_1.val;
}
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Nice"), gdjs.Level1Code.GDNiceObjects1);
gdjs.copyArray(runtimeScene.getObjects("SpaceToJump"), gdjs.Level1Code.GDSpaceToJumpObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDSpaceToJumpObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSpaceToJumpObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDNiceObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDNiceObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trigger"), gdjs.Level1Code.GDTriggerObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition0IsTrue_0;
gdjs.Level1Code.condition0IsTrue_1.val = false;
gdjs.Level1Code.condition1IsTrue_1.val = false;
{
gdjs.Level1Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDTriggerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level1Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDTriggerObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDTriggerObjects1[i].getVariableString(gdjs.Level1Code.GDTriggerObjects1[i].getVariables().get("id")) == "jump_end" ) {
        gdjs.Level1Code.condition1IsTrue_1.val = true;
        gdjs.Level1Code.GDTriggerObjects1[k] = gdjs.Level1Code.GDTriggerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDTriggerObjects1.length = k;}}
gdjs.Level1Code.conditionTrue_1.val = true && gdjs.Level1Code.condition0IsTrue_1.val && gdjs.Level1Code.condition1IsTrue_1.val;
}
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DontFall"), gdjs.Level1Code.GDDontFallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Nice"), gdjs.Level1Code.GDNiceObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDNiceObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDNiceObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDDontFallObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDDontFallObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trigger"), gdjs.Level1Code.GDTriggerObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition0IsTrue_0;
gdjs.Level1Code.condition0IsTrue_1.val = false;
gdjs.Level1Code.condition1IsTrue_1.val = false;
{
gdjs.Level1Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDTriggerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level1Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDTriggerObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDTriggerObjects1[i].getVariableString(gdjs.Level1Code.GDTriggerObjects1[i].getVariables().get("id")) == "not_fall" ) {
        gdjs.Level1Code.condition1IsTrue_1.val = true;
        gdjs.Level1Code.GDTriggerObjects1[k] = gdjs.Level1Code.GDTriggerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDTriggerObjects1.length = k;}}
gdjs.Level1Code.conditionTrue_1.val = true && gdjs.Level1Code.condition0IsTrue_1.val && gdjs.Level1Code.condition1IsTrue_1.val;
}
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CollectHearts"), gdjs.Level1Code.GDCollectHeartsObjects1);
gdjs.copyArray(runtimeScene.getObjects("DontFall"), gdjs.Level1Code.GDDontFallObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDDontFallObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDDontFallObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDCollectHeartsObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCollectHeartsObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trigger"), gdjs.Level1Code.GDTriggerObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition0IsTrue_0;
gdjs.Level1Code.condition0IsTrue_1.val = false;
gdjs.Level1Code.condition1IsTrue_1.val = false;
{
gdjs.Level1Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDTriggerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level1Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDTriggerObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDTriggerObjects1[i].getVariableString(gdjs.Level1Code.GDTriggerObjects1[i].getVariables().get("id")) == "collected" ) {
        gdjs.Level1Code.condition1IsTrue_1.val = true;
        gdjs.Level1Code.GDTriggerObjects1[k] = gdjs.Level1Code.GDTriggerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDTriggerObjects1.length = k;}}
gdjs.Level1Code.conditionTrue_1.val = true && gdjs.Level1Code.condition0IsTrue_1.val && gdjs.Level1Code.condition1IsTrue_1.val;
}
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CollectHearts"), gdjs.Level1Code.GDCollectHeartsObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDCollectHeartsObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCollectHeartsObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trigger"), gdjs.Level1Code.GDTriggerObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition0IsTrue_0;
gdjs.Level1Code.condition0IsTrue_1.val = false;
gdjs.Level1Code.condition1IsTrue_1.val = false;
{
gdjs.Level1Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDTriggerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level1Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDTriggerObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDTriggerObjects1[i].getVariableString(gdjs.Level1Code.GDTriggerObjects1[i].getVariables().get("id")) == "super_mur" ) {
        gdjs.Level1Code.condition1IsTrue_1.val = true;
        gdjs.Level1Code.GDTriggerObjects1[k] = gdjs.Level1Code.GDTriggerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDTriggerObjects1.length = k;}}
gdjs.Level1Code.conditionTrue_1.val = true && gdjs.Level1Code.condition0IsTrue_1.val && gdjs.Level1Code.condition1IsTrue_1.val;
}
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GoodJob"), gdjs.Level1Code.GDGoodJobObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDGoodJobObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDGoodJobObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trigger"), gdjs.Level1Code.GDTriggerObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition0IsTrue_0;
gdjs.Level1Code.condition0IsTrue_1.val = false;
gdjs.Level1Code.condition1IsTrue_1.val = false;
{
gdjs.Level1Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDTriggerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level1Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDTriggerObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDTriggerObjects1[i].getVariableString(gdjs.Level1Code.GDTriggerObjects1[i].getVariables().get("id")) == "hide_super" ) {
        gdjs.Level1Code.condition1IsTrue_1.val = true;
        gdjs.Level1Code.GDTriggerObjects1[k] = gdjs.Level1Code.GDTriggerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDTriggerObjects1.length = k;}}
gdjs.Level1Code.conditionTrue_1.val = true && gdjs.Level1Code.condition0IsTrue_1.val && gdjs.Level1Code.condition1IsTrue_1.val;
}
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GoodJob"), gdjs.Level1Code.GDGoodJobObjects1);
gdjs.copyArray(runtimeScene.getObjects("MustJump"), gdjs.Level1Code.GDMustJumpObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDGoodJobObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDGoodJobObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDMustJumpObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMustJumpObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trigger"), gdjs.Level1Code.GDTriggerObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition0IsTrue_0;
gdjs.Level1Code.condition0IsTrue_1.val = false;
gdjs.Level1Code.condition1IsTrue_1.val = false;
{
gdjs.Level1Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDTriggerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level1Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDTriggerObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDTriggerObjects1[i].getVariableString(gdjs.Level1Code.GDTriggerObjects1[i].getVariables().get("id")) == "next_level" ) {
        gdjs.Level1Code.condition1IsTrue_1.val = true;
        gdjs.Level1Code.GDTriggerObjects1[k] = gdjs.Level1Code.GDTriggerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDTriggerObjects1.length = k;}}
gdjs.Level1Code.conditionTrue_1.val = true && gdjs.Level1Code.condition0IsTrue_1.val && gdjs.Level1Code.condition1IsTrue_1.val;
}
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level2", false);
}}

}


};

gdjs.Level1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level1Code.GDPlayerObjects1.length = 0;
gdjs.Level1Code.GDPlayerObjects2.length = 0;
gdjs.Level1Code.GDPlayerObjects3.length = 0;
gdjs.Level1Code.GDPlatformObjects1.length = 0;
gdjs.Level1Code.GDPlatformObjects2.length = 0;
gdjs.Level1Code.GDPlatformObjects3.length = 0;
gdjs.Level1Code.GDPlatform2Objects1.length = 0;
gdjs.Level1Code.GDPlatform2Objects2.length = 0;
gdjs.Level1Code.GDPlatform2Objects3.length = 0;
gdjs.Level1Code.GDTriggerObjects1.length = 0;
gdjs.Level1Code.GDTriggerObjects2.length = 0;
gdjs.Level1Code.GDTriggerObjects3.length = 0;
gdjs.Level1Code.GDMaksObjects1.length = 0;
gdjs.Level1Code.GDMaksObjects2.length = 0;
gdjs.Level1Code.GDMaksObjects3.length = 0;
gdjs.Level1Code.GDCloud1Objects1.length = 0;
gdjs.Level1Code.GDCloud1Objects2.length = 0;
gdjs.Level1Code.GDCloud1Objects3.length = 0;
gdjs.Level1Code.GDCloud2Objects1.length = 0;
gdjs.Level1Code.GDCloud2Objects2.length = 0;
gdjs.Level1Code.GDCloud2Objects3.length = 0;
gdjs.Level1Code.GDBush1Objects1.length = 0;
gdjs.Level1Code.GDBush1Objects2.length = 0;
gdjs.Level1Code.GDBush1Objects3.length = 0;
gdjs.Level1Code.GDBush2Objects1.length = 0;
gdjs.Level1Code.GDBush2Objects2.length = 0;
gdjs.Level1Code.GDBush2Objects3.length = 0;
gdjs.Level1Code.GDFlower1Objects1.length = 0;
gdjs.Level1Code.GDFlower1Objects2.length = 0;
gdjs.Level1Code.GDFlower1Objects3.length = 0;
gdjs.Level1Code.GDFlower2Objects1.length = 0;
gdjs.Level1Code.GDFlower2Objects2.length = 0;
gdjs.Level1Code.GDFlower2Objects3.length = 0;
gdjs.Level1Code.GDFenceObjects1.length = 0;
gdjs.Level1Code.GDFenceObjects2.length = 0;
gdjs.Level1Code.GDFenceObjects3.length = 0;
gdjs.Level1Code.GDLoveCoinObjects1.length = 0;
gdjs.Level1Code.GDLoveCoinObjects2.length = 0;
gdjs.Level1Code.GDLoveCoinObjects3.length = 0;
gdjs.Level1Code.GDLoveMeterObjects1.length = 0;
gdjs.Level1Code.GDLoveMeterObjects2.length = 0;
gdjs.Level1Code.GDLoveMeterObjects3.length = 0;
gdjs.Level1Code.GDLovePowerObjects1.length = 0;
gdjs.Level1Code.GDLovePowerObjects2.length = 0;
gdjs.Level1Code.GDLovePowerObjects3.length = 0;
gdjs.Level1Code.GDSpaceToJumpObjects1.length = 0;
gdjs.Level1Code.GDSpaceToJumpObjects2.length = 0;
gdjs.Level1Code.GDSpaceToJumpObjects3.length = 0;
gdjs.Level1Code.GDNiceObjects1.length = 0;
gdjs.Level1Code.GDNiceObjects2.length = 0;
gdjs.Level1Code.GDNiceObjects3.length = 0;
gdjs.Level1Code.GDDontFallObjects1.length = 0;
gdjs.Level1Code.GDDontFallObjects2.length = 0;
gdjs.Level1Code.GDDontFallObjects3.length = 0;
gdjs.Level1Code.GDCollectHeartsObjects1.length = 0;
gdjs.Level1Code.GDCollectHeartsObjects2.length = 0;
gdjs.Level1Code.GDCollectHeartsObjects3.length = 0;
gdjs.Level1Code.GDGoodJobObjects1.length = 0;
gdjs.Level1Code.GDGoodJobObjects2.length = 0;
gdjs.Level1Code.GDGoodJobObjects3.length = 0;
gdjs.Level1Code.GDMustJumpObjects1.length = 0;
gdjs.Level1Code.GDMustJumpObjects2.length = 0;
gdjs.Level1Code.GDMustJumpObjects3.length = 0;
gdjs.Level1Code.GDLoveWorldObjects1.length = 0;
gdjs.Level1Code.GDLoveWorldObjects2.length = 0;
gdjs.Level1Code.GDLoveWorldObjects3.length = 0;
gdjs.Level1Code.GDKotDownObjects1.length = 0;
gdjs.Level1Code.GDKotDownObjects2.length = 0;
gdjs.Level1Code.GDKotDownObjects3.length = 0;

gdjs.Level1Code.eventsList1(runtimeScene);

return;

}

gdjs['Level1Code'] = gdjs.Level1Code;
