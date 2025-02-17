import { PostChannelTest } from './PostChannelTest';
import { HttpManagerTest } from './HttpManagerTest';
import { KillSwitchTest } from './KillSwitchTest';
import { SerializerTest } from './SerializerTest';
import { FileSizeCheckTest } from "./FileSizeCheckTest"

export function registerTests() {
    new PostChannelTest("PostChannelTest").registerTests();
    new HttpManagerTest("HttpManagerTest").registerTests();
    new HttpManagerTest("HttpManagerTest", true).registerTests();
    new KillSwitchTest("KillSwitchTest").registerTests();
    new SerializerTest("SerializerTest").registerTests();
    new FileSizeCheckTest("FileSizeCheckTest").registerTests();
}

registerTests();
