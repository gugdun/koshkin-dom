gdjs.IntroCode = {};
gdjs.IntroCode.GDPlayerObjects1= [];
gdjs.IntroCode.GDPlayerObjects2= [];
gdjs.IntroCode.GDPlatformObjects1= [];
gdjs.IntroCode.GDPlatformObjects2= [];
gdjs.IntroCode.GDPlatform2Objects1= [];
gdjs.IntroCode.GDPlatform2Objects2= [];
gdjs.IntroCode.GDTriggerObjects1= [];
gdjs.IntroCode.GDTriggerObjects2= [];
gdjs.IntroCode.GDMaksObjects1= [];
gdjs.IntroCode.GDMaksObjects2= [];
gdjs.IntroCode.GDCloud1Objects1= [];
gdjs.IntroCode.GDCloud1Objects2= [];
gdjs.IntroCode.GDCloud2Objects1= [];
gdjs.IntroCode.GDCloud2Objects2= [];
gdjs.IntroCode.GDBush1Objects1= [];
gdjs.IntroCode.GDBush1Objects2= [];
gdjs.IntroCode.GDBush2Objects1= [];
gdjs.IntroCode.GDBush2Objects2= [];
gdjs.IntroCode.GDFlower1Objects1= [];
gdjs.IntroCode.GDFlower1Objects2= [];
gdjs.IntroCode.GDFlower2Objects1= [];
gdjs.IntroCode.GDFlower2Objects2= [];
gdjs.IntroCode.GDFenceObjects1= [];
gdjs.IntroCode.GDFenceObjects2= [];
gdjs.IntroCode.GDLoveCoinObjects1= [];
gdjs.IntroCode.GDLoveCoinObjects2= [];
gdjs.IntroCode.GDLoveMeterObjects1= [];
gdjs.IntroCode.GDLoveMeterObjects2= [];
gdjs.IntroCode.GDLovePowerObjects1= [];
gdjs.IntroCode.GDLovePowerObjects2= [];
gdjs.IntroCode.GDHouseObjects1= [];
gdjs.IntroCode.GDHouseObjects2= [];
gdjs.IntroCode.GDMaksEmotesObjects1= [];
gdjs.IntroCode.GDMaksEmotesObjects2= [];
gdjs.IntroCode.GDMartaEmotesObjects1= [];
gdjs.IntroCode.GDMartaEmotesObjects2= [];
gdjs.IntroCode.GDMaksText1Objects1= [];
gdjs.IntroCode.GDMaksText1Objects2= [];
gdjs.IntroCode.GDMartaText1Objects1= [];
gdjs.IntroCode.GDMartaText1Objects2= [];
gdjs.IntroCode.GDMartaHeartObjects1= [];
gdjs.IntroCode.GDMartaHeartObjects2= [];

gdjs.IntroCode.conditionTrue_0 = {val:false};
gdjs.IntroCode.condition0IsTrue_0 = {val:false};
gdjs.IntroCode.condition1IsTrue_0 = {val:false};
gdjs.IntroCode.condition2IsTrue_0 = {val:false};
gdjs.IntroCode.condition3IsTrue_0 = {val:false};
gdjs.IntroCode.conditionTrue_1 = {val:false};
gdjs.IntroCode.condition0IsTrue_1 = {val:false};
gdjs.IntroCode.condition1IsTrue_1 = {val:false};
gdjs.IntroCode.condition2IsTrue_1 = {val:false};
gdjs.IntroCode.condition3IsTrue_1 = {val:false};


gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDMaksObjects1Objects = Hashtable.newFrom({"Maks": gdjs.IntroCode.GDMaksObjects1});
gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDTriggerObjects1Objects = Hashtable.newFrom({"Trigger": gdjs.IntroCode.GDTriggerObjects1});
gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDMaksObjects1Objects = Hashtable.newFrom({"Maks": gdjs.IntroCode.GDMaksObjects1});
gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDTriggerObjects1Objects = Hashtable.newFrom({"Trigger": gdjs.IntroCode.GDTriggerObjects1});
gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDMartaHeartObjects1Objects = Hashtable.newFrom({"MartaHeart": gdjs.IntroCode.GDMartaHeartObjects1});
gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.IntroCode.GDPlayerObjects1});
gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDTriggerObjects1Objects = Hashtable.newFrom({"Trigger": gdjs.IntroCode.GDTriggerObjects1});
gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{



}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.IntroCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Maks"), gdjs.IntroCode.GDMaksObjects1);
gdjs.copyArray(runtimeScene.getObjects("MaksEmotes"), gdjs.IntroCode.GDMaksEmotesObjects1);
gdjs.copyArray(runtimeScene.getObjects("MaksText1"), gdjs.IntroCode.GDMaksText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("MartaEmotes"), gdjs.IntroCode.GDMartaEmotesObjects1);
gdjs.copyArray(runtimeScene.getObjects("MartaHeart"), gdjs.IntroCode.GDMartaHeartObjects1);
gdjs.copyArray(runtimeScene.getObjects("MartaText1"), gdjs.IntroCode.GDMartaText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Trigger"), gdjs.IntroCode.GDTriggerObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDTriggerObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDTriggerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.IntroCode.GDMaksObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDMaksObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.IntroCode.GDMaksObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDMaksObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.IntroCode.GDMaksEmotesObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDMaksEmotesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.IntroCode.GDMartaEmotesObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDMartaEmotesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.IntroCode.GDMaksText1Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDMaksText1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.IntroCode.GDMartaText1Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDMartaText1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.IntroCode.GDMartaHeartObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDMartaHeartObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Maks"), gdjs.IntroCode.GDMaksObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trigger"), gdjs.IntroCode.GDTriggerObjects1);

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDMaksObjects1Objects, gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDTriggerObjects1Objects, true, runtimeScene, false);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.IntroCode.GDMaksObjects1 */
{for(var i = 0, len = gdjs.IntroCode.GDMaksObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDMaksObjects1[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Maks"), gdjs.IntroCode.GDMaksObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trigger"), gdjs.IntroCode.GDTriggerObjects1);

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
{gdjs.IntroCode.conditionTrue_1 = gdjs.IntroCode.condition0IsTrue_0;
gdjs.IntroCode.condition0IsTrue_1.val = false;
gdjs.IntroCode.condition1IsTrue_1.val = false;
gdjs.IntroCode.condition2IsTrue_1.val = false;
{
gdjs.IntroCode.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDMaksObjects1Objects, gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDTriggerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.IntroCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.IntroCode.GDTriggerObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDTriggerObjects1[i].getVariableString(gdjs.IntroCode.GDTriggerObjects1[i].getVariables().get("id")) == "maks_stop" ) {
        gdjs.IntroCode.condition1IsTrue_1.val = true;
        gdjs.IntroCode.GDTriggerObjects1[k] = gdjs.IntroCode.GDTriggerObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDTriggerObjects1.length = k;}if ( gdjs.IntroCode.condition1IsTrue_1.val ) {
{
gdjs.IntroCode.condition2IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}}
}
gdjs.IntroCode.conditionTrue_1.val = true && gdjs.IntroCode.condition0IsTrue_1.val && gdjs.IntroCode.condition1IsTrue_1.val && gdjs.IntroCode.condition2IsTrue_1.val;
}
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.IntroCode.GDMaksObjects1 */
{for(var i = 0, len = gdjs.IntroCode.GDMaksObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDMaksObjects1[i].setAnimation(0);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
{gdjs.IntroCode.conditionTrue_1 = gdjs.IntroCode.condition0IsTrue_0;
gdjs.IntroCode.condition0IsTrue_1.val = false;
gdjs.IntroCode.condition1IsTrue_1.val = false;
{
gdjs.IntroCode.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 0;
}if ( gdjs.IntroCode.condition0IsTrue_1.val ) {
{
gdjs.IntroCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}}
gdjs.IntroCode.conditionTrue_1.val = true && gdjs.IntroCode.condition0IsTrue_1.val && gdjs.IntroCode.condition1IsTrue_1.val;
}
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).add(1);
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MaksEmotes"), gdjs.IntroCode.GDMaksEmotesObjects1);
gdjs.copyArray(runtimeScene.getObjects("MaksText1"), gdjs.IntroCode.GDMaksText1Objects1);
{for(var i = 0, len = gdjs.IntroCode.GDMaksEmotesObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDMaksEmotesObjects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.IntroCode.GDMaksEmotesObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDMaksEmotesObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.IntroCode.GDMaksText1Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDMaksText1Objects1[i].hide(false);
}
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MaksEmotes"), gdjs.IntroCode.GDMaksEmotesObjects1);
gdjs.copyArray(runtimeScene.getObjects("MaksText1"), gdjs.IntroCode.GDMaksText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("MartaEmotes"), gdjs.IntroCode.GDMartaEmotesObjects1);
gdjs.copyArray(runtimeScene.getObjects("MartaText1"), gdjs.IntroCode.GDMartaText1Objects1);
{for(var i = 0, len = gdjs.IntroCode.GDMaksText1Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDMaksText1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.IntroCode.GDMaksEmotesObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDMaksEmotesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.IntroCode.GDMartaEmotesObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDMartaEmotesObjects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.IntroCode.GDMartaText1Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDMartaText1Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.IntroCode.GDMartaEmotesObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDMartaEmotesObjects1[i].hide(false);
}
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 3;
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MaksEmotes"), gdjs.IntroCode.GDMaksEmotesObjects1);
gdjs.copyArray(runtimeScene.getObjects("MartaEmotes"), gdjs.IntroCode.GDMartaEmotesObjects1);
gdjs.copyArray(runtimeScene.getObjects("MartaText1"), gdjs.IntroCode.GDMartaText1Objects1);
{for(var i = 0, len = gdjs.IntroCode.GDMartaEmotesObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDMartaEmotesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.IntroCode.GDMartaText1Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDMartaText1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.IntroCode.GDMaksEmotesObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDMaksEmotesObjects1[i].setAnimation(4);
}
}{for(var i = 0, len = gdjs.IntroCode.GDMaksEmotesObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDMaksEmotesObjects1[i].hide(false);
}
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 4;
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.IntroCode.GDPlayerObjects1);
gdjs.IntroCode.GDMartaHeartObjects1.length = 0;

{for(var i = 0, len = gdjs.IntroCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDPlayerObjects1[i].addPolarForce(-(90), 100, 1);
}
}{for(var i = 0, len = gdjs.IntroCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setGravity(0);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDMartaHeartObjects1Objects, 318, 177, "");
}{for(var i = 0, len = gdjs.IntroCode.GDMartaHeartObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDMartaHeartObjects1[i].getBehavior("Physics2").applyPolarImpulse(-(45), 0.005, 0, 0);
}
}{runtimeScene.getVariables().getFromIndex(0).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.IntroCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trigger"), gdjs.IntroCode.GDTriggerObjects1);

gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDPlayerObjects1Objects, gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDTriggerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.IntroCode.GDTriggerObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDTriggerObjects1[i].getVariableString(gdjs.IntroCode.GDTriggerObjects1[i].getVariables().get("id")) == "next_level" ) {
        gdjs.IntroCode.condition1IsTrue_0.val = true;
        gdjs.IntroCode.GDTriggerObjects1[k] = gdjs.IntroCode.GDTriggerObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDTriggerObjects1.length = k;}}
if (gdjs.IntroCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDPlayerObjects1.length = 0;
gdjs.IntroCode.GDPlayerObjects2.length = 0;
gdjs.IntroCode.GDPlatformObjects1.length = 0;
gdjs.IntroCode.GDPlatformObjects2.length = 0;
gdjs.IntroCode.GDPlatform2Objects1.length = 0;
gdjs.IntroCode.GDPlatform2Objects2.length = 0;
gdjs.IntroCode.GDTriggerObjects1.length = 0;
gdjs.IntroCode.GDTriggerObjects2.length = 0;
gdjs.IntroCode.GDMaksObjects1.length = 0;
gdjs.IntroCode.GDMaksObjects2.length = 0;
gdjs.IntroCode.GDCloud1Objects1.length = 0;
gdjs.IntroCode.GDCloud1Objects2.length = 0;
gdjs.IntroCode.GDCloud2Objects1.length = 0;
gdjs.IntroCode.GDCloud2Objects2.length = 0;
gdjs.IntroCode.GDBush1Objects1.length = 0;
gdjs.IntroCode.GDBush1Objects2.length = 0;
gdjs.IntroCode.GDBush2Objects1.length = 0;
gdjs.IntroCode.GDBush2Objects2.length = 0;
gdjs.IntroCode.GDFlower1Objects1.length = 0;
gdjs.IntroCode.GDFlower1Objects2.length = 0;
gdjs.IntroCode.GDFlower2Objects1.length = 0;
gdjs.IntroCode.GDFlower2Objects2.length = 0;
gdjs.IntroCode.GDFenceObjects1.length = 0;
gdjs.IntroCode.GDFenceObjects2.length = 0;
gdjs.IntroCode.GDLoveCoinObjects1.length = 0;
gdjs.IntroCode.GDLoveCoinObjects2.length = 0;
gdjs.IntroCode.GDLoveMeterObjects1.length = 0;
gdjs.IntroCode.GDLoveMeterObjects2.length = 0;
gdjs.IntroCode.GDLovePowerObjects1.length = 0;
gdjs.IntroCode.GDLovePowerObjects2.length = 0;
gdjs.IntroCode.GDHouseObjects1.length = 0;
gdjs.IntroCode.GDHouseObjects2.length = 0;
gdjs.IntroCode.GDMaksEmotesObjects1.length = 0;
gdjs.IntroCode.GDMaksEmotesObjects2.length = 0;
gdjs.IntroCode.GDMartaEmotesObjects1.length = 0;
gdjs.IntroCode.GDMartaEmotesObjects2.length = 0;
gdjs.IntroCode.GDMaksText1Objects1.length = 0;
gdjs.IntroCode.GDMaksText1Objects2.length = 0;
gdjs.IntroCode.GDMartaText1Objects1.length = 0;
gdjs.IntroCode.GDMartaText1Objects2.length = 0;
gdjs.IntroCode.GDMartaHeartObjects1.length = 0;
gdjs.IntroCode.GDMartaHeartObjects2.length = 0;

gdjs.IntroCode.eventsList0(runtimeScene);

return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
