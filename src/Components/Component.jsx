import React, { useEffect, useRef } from "react";
import "./css/style.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";
import texts from "./data/texts";
import images from "./data/images";

//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement

const Component = ({
  width = 1440,
  image1 = images.image1,
  image2 = images.image2,
  image3 = images.image3,
  image4 = images.image4,
  image5 = images.image5,
  image6 = images.image6,
  image7 = images.image7,
  image8 = images.image8,
  image9 = images.image9,
  image10 = images.image10,
  image11 = images.image11,
  image12 = images.image12,
  image13 = images.image13,
  image14 = images.image14,
  image15 = images.image15,
  image16 = images.image16,
  image17 = images.image17,
  text1 = texts.text1,
  text2 = texts.text2,
  text3 = texts.text3,
  text4 = texts.text4,
  text5 = texts.text5,
  text6 = texts.text6,
  text7 = texts.text7,
  text8 = texts.text8,
  text9 = texts.text9,
  text10 = texts.text10,
  text11 = texts.text11,
  text12 = texts.text12,
  text13 = texts.text13,
  text14 = texts.text14,
  text15 = texts.text15,
  text16 = texts.text16,
  text17 = texts.text17,
  text18 = texts.text18,
  text19 = texts.text19,
  text20 = texts.text20,
  text21 = texts.text21,
  text22 = texts.text22,
  text23 = texts.text23,
  text24 = texts.text24,
  text25 = texts.text25,
  text26 = texts.text26,
  text27 = texts.text27,
  text28 = texts.text28,
  text29 = texts.text29,
  text30 = texts.text30,
  text31 = texts.text31,
  text32 = texts.text32,
  text33 = texts.text33,
  text34 = texts.text34,
  text35 = texts.text35,
  text36 = texts.text36,
  text37 = texts.text37,
  text38 = texts.text38,
  text39 = texts.text39,
  text40 = texts.text40,
  text41 = texts.text41,
  text42 = texts.text42,
  text43 = texts.text43,
  text44 = texts.text44,
  text45 = texts.text45,
  text46 = texts.text46,
  text47 = texts.text47,
  text48 = texts.text48,
  text49 = texts.text49,
  text50 = texts.text50,
  text51 = texts.text51,
  text52 = texts.text52,
  text53 = texts.text53,
  text54 = texts.text54,
  text55 = texts.text55,
  text56 = texts.text56,
  text57 = texts.text57,
  text58 = texts.text58,
  text59 = texts.text59,
  text60 = texts.text60,
  text61 = texts.text61,
  text62 = texts.text62,
  text63 = texts.text63,
  text64 = texts.text64,
  text65 = texts.text65,
  text66 = texts.text66,
  text67 = texts.text67,
  text68 = texts.text68,
  text69 = texts.text69,
  text70 = texts.text70,
  text71 = texts.text71,
  text72 = texts.text72,
  text73 = texts.text73,
  text74 = texts.text74,
  text75 = texts.text75,
  text76 = texts.text76,
  text77 = texts.text77,
  text78 = texts.text78,
  text79 = texts.text79,
  text80 = texts.text80,
  text81 = texts.text81,
  text82 = texts.text82,
  text83 = texts.text83,
  text84 = texts.text84,
  text85 = texts.text85,
  text86 = texts.text86,
  text87 = texts.text87,
  text88 = texts.text88,
  text89 = texts.text89,
  text90 = texts.text90,
  text91 = texts.text91,
  text92 = texts.text92,
  text93 = texts.text93,
  text94 = texts.text94,
  text95 = texts.text95,
  text96 = texts.text96,
  text97 = texts.text97,
  text98 = texts.text98,
  text99 = texts.text99,
  text100 = texts.text100,
  text101 = texts.text101,
  text102 = texts.text102,
  text103 = texts.text103,
  text104 = texts.text104,
  text105 = texts.text105,
  text106 = texts.text106,
  text107 = texts.text107,
}) => {
  const ref = useRef(null);
  const updateWidth = (width) => {
    if (ref.current) {
      ref.current.style.setProperty("--custom-width", `${width}px`);
    }
  };
  useEffect(() => {
    updateWidth(width);
    runAnimations();
  }, [ref]);

  return (
    <div className="wrapper-div-1181 " ref={ref}>
      <div className="pos-abs chatbot-landing-1181">
        {/* Content1 */}
        <section className="pos-abs content-1182">
          <div className="pos-abs content-1183">
            <div className="pos-abs navbar-1184">
              <div className="pos-abs buttons-I1184_2916057">
                <div className="pos-abs button-I1184_2916058">
                  <div className="pos-abs text-I1184_2916058_705199">
                    <span className="text-I1184_2916058_705199-0 ">
                      {text1}
                    </span>
                  </div>
                </div>
                <div className="pos-abs button-I1184_2916059">
                  <div className="pos-abs text-I1184_2916059_2293248">
                    <span className="text-I1184_2916059_2293248-0 ">
                      {text2}
                    </span>
                  </div>
                </div>
              </div>
              <div className="pos-abs logo-I1184_2916045">
                <div className="pos-abs text-I1184_2916045_2101570">
                  <span className="text-I1184_2916045_2101570-0 ">{text3}</span>
                </div>
              </div>
              <div className="pos-abs nav-link-I1184_2916046">
                <div className="pos-abs menu-I1184_2916047">
                  <div className="pos-abs text-I1184_2916048">
                    <span className="text-I1184_2916048-0 ">{text4}</span>
                  </div>
                </div>
                <div className="pos-abs menu-I1184_2916049">
                  <div className="pos-abs text-I1184_2916050">
                    <span className="text-I1184_2916050-0 ">{text5}</span>
                  </div>
                  <div className="pos-abs icon--caretdown-I1184_2916051">
                    <div className="pos-abs vector-I1184_2916052">
                      <div className="nodeBg-I1184_2916052 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>
                </div>
                <div className="pos-abs menu-I1184_2916053">
                  <div className="pos-abs text-I1184_2916054">
                    <span className="text-I1184_2916054-0 ">{text6}</span>
                  </div>
                </div>
                <div className="pos-abs menu-I1184_2916055">
                  <div className="pos-abs text-I1184_2916056">
                    <span className="text-I1184_2916056-0 ">{text7}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pos-abs vector-1629">
              <div className="nodeBg-1629 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
            <div className="pos-abs hero-1185">
              <div className="pos-abs image-1208">
                <div className="pos-abs image-1209">
                  <img
                    src={`${image1}`}
                    className="pos-abs image-div bg-no-repeat  bg-crop nodeBg-1209 object-fit "
                    alt="Image1 Image"
                  />{" "}
                </div>
                <div className="pos-abs mask-group-1210">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/figma-plugin-a7287.appspot.com/o/user-images%2F18-jul-2024%2Falishan khattak1721301791054%2Fimage-1-210.png?alt=media&token=0"
                    className="pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div  object-fit"
                    alt="Mask Group1 Image"
                  />{" "}
                </div>
                <div className="pos-abs social-proof-ca-1213">
                  <div className="pos-abs icon-container-1214">
                    <div className="pos-abs icon--headset-1215">
                      <div className="pos-abs vector-1216">
                        <div className="nodeBg-1216 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                    </div>
                  </div>
                  <div className="pos-abs content-1217">
                    <div className="pos-abs text-1218">
                      <span className="text-1218-0 ">{text8}</span>
                    </div>
                    <div className="pos-abs text-1219">
                      <span className="text-1219-0 ">{text9}</span>
                    </div>
                  </div>
                </div>
                <div className="pos-abs social-proof-ca-1220">
                  <div className="pos-abs icon-container-1221">
                    <div className="pos-abs icon--key-1222">
                      <div className="pos-abs vector-1223">
                        <div className="nodeBg-1223 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                    </div>
                  </div>
                  <div className="pos-abs content-1224">
                    <div className="pos-abs text-1225">
                      <span className="text-1225-0 ">{text10}</span>
                    </div>
                    <div className="pos-abs text-1226">
                      <span className="text-1226-0 ">{text11}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pos-abs container-1186">
                <div className="pos-abs content-1187">
                  <div className="pos-abs content-1188">
                    <div className="pos-abs button-1189">
                      <div className="pos-abs text-1192">
                        <span className="text-1192-0 ">{text12}</span>
                      </div>
                      <div className="pos-abs frame-1190">
                        <div className="pos-abs vector-1191">
                          <div className="nodeBg-1191 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                      </div>
                    </div>
                    <div className="pos-abs content-1193">
                      <div className="pos-abs text-1194">
                        <span className="text-1194-0 ">{text13}</span>
                      </div>
                      <div className="pos-abs text-1195">
                        <span className="text-1195-0 ">{text14}</span>
                      </div>
                    </div>
                  </div>
                  <div className="pos-abs buttons-1196">
                    <div className="pos-abs button-1197">
                      <div className="pos-abs text-I1197_5104724">
                        <span className="text-I1197_5104724-0 ">{text15}</span>
                      </div>
                    </div>
                    <div className="pos-abs button-1198">
                      <div className="pos-abs text-I1198_504689">
                        <span className="text-I1198_504689-0 ">{text16}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pos-abs content-1199">
                  <div className="pos-abs avatars-1200">
                    <div className="pos-abs avatar-1201">
                      <img
                        src={`${image2}`}
                        className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-1201 object-fit "
                        alt="Avatar1 Image"
                      />{" "}
                    </div>
                    <div className="pos-abs avatar-1202">
                      <img
                        src={`${image3}`}
                        className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-1202 object-fit "
                        alt="Avatar2 Image"
                      />{" "}
                    </div>
                    <div className="pos-abs avatar-1203">
                      <img
                        src={`${image4}`}
                        className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-1203 object-fit "
                        alt="Avatar3 Image"
                      />{" "}
                    </div>
                    <div className="pos-abs add-1204">
                      <div className="pos-abs icon--plus-1205">
                        <div className="pos-abs vector-1206">
                          <div className="nodeBg-1206 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pos-abs text-1207">
                    <span className="text-1207-0 ">{text17}</span>
                    <span className="text-1207-1 ">{text18}</span>
                    <span className="text-1207-2 ">{text19}</span>
                    <span className="text-1207-3 ">{text20}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pos-abs social-proof-1227">
              <div className="pos-abs text-1228">
                <span className="text-1228-0 ">{text21}</span>
              </div>
              <div className="pos-abs partner-logo-1229">
                <div className="pos-abs logo-1230">
                  <div className="pos-abs vector-1231">
                    <div className="nodeBg-1231 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className="pos-abs vector-1232">
                    <div className="nodeBg-1232 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className="pos-abs vector-1234">
                    <div className="nodeBg-1234 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className="pos-abs vector-1235">
                    <div className="nodeBg-1235 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className="pos-abs vector-1240">
                    <div className="nodeBg-1240 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className="pos-abs vector-1236">
                    <div className="nodeBg-1236 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className="pos-abs vector-1238">
                    <div className="nodeBg-1238 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className="pos-abs vector-1237">
                    <div className="nodeBg-1237 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className="pos-abs vector-1239">
                    <div className="nodeBg-1239 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className="pos-abs vector-1242">
                    <div className="nodeBg-1242 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className="pos-abs vector-1233">
                    <div className="nodeBg-1233 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className="pos-abs vector-1241">
                    <div className="nodeBg-1241 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
                <div className="pos-abs logo-1243">
                  <div className="pos-abs vector-1253">
                    <div className="nodeBg-1253 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className="pos-abs vector-1244">
                    <div className="nodeBg-1244 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className="pos-abs vector-1248">
                    <div className="nodeBg-1248 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className="pos-abs vector-1246">
                    <div className="nodeBg-1246 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className="pos-abs vector-1249">
                    <div className="nodeBg-1249 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className="pos-abs vector-1250">
                    <div className="nodeBg-1250 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className="pos-abs vector-1252">
                    <div className="nodeBg-1252 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className="pos-abs vector-1245">
                    <div className="nodeBg-1245 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className="pos-abs vector-1247">
                    <div className="nodeBg-1247 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className="pos-abs vector-1251">
                    <div className="nodeBg-1251 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
                <div className="pos-abs logo-1254">
                  <div className="pos-abs vector-1264">
                    <div className="nodeBg-1264 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className="pos-abs vector-1255">
                    <div className="nodeBg-1255 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className="pos-abs vector-1259">
                    <div className="nodeBg-1259 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className="pos-abs vector-1257">
                    <div className="nodeBg-1257 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className="pos-abs vector-1260">
                    <div className="nodeBg-1260 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className="pos-abs vector-1261">
                    <div className="nodeBg-1261 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className="pos-abs vector-1263">
                    <div className="nodeBg-1263 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className="pos-abs vector-1256">
                    <div className="nodeBg-1256 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className="pos-abs vector-1258">
                    <div className="nodeBg-1258 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className="pos-abs vector-1262">
                    <div className="nodeBg-1262 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className="pos-abs vector-1269">
                    <div className="nodeBg-1269 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className="pos-abs vector-1265">
                    <div className="nodeBg-1265 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className="pos-abs vector-1268">
                    <div className="nodeBg-1268 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className="pos-abs vector-1266">
                    <div className="nodeBg-1266 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className="pos-abs vector-1267">
                    <div className="nodeBg-1267 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
                <div className="pos-abs logo-1270">
                  <div className="pos-abs vector-1280">
                    <div className="nodeBg-1280 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className="pos-abs vector-1271">
                    <div className="nodeBg-1271 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className="pos-abs vector-1275">
                    <div className="nodeBg-1275 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className="pos-abs vector-1273">
                    <div className="nodeBg-1273 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className="pos-abs vector-1276">
                    <div className="nodeBg-1276 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className="pos-abs vector-1277">
                    <div className="nodeBg-1277 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className="pos-abs vector-1279">
                    <div className="nodeBg-1279 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className="pos-abs vector-1272">
                    <div className="nodeBg-1272 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className="pos-abs vector-1274">
                    <div className="nodeBg-1274 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className="pos-abs vector-1278">
                    <div className="nodeBg-1278 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
                <div className="pos-abs logo-1281">
                  <div className="pos-abs vector-1283">
                    <div className="nodeBg-1283 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                  <div className="pos-abs vector-1282">
                    <div className="nodeBg-1282 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pos-abs why-choose-us-1284">
            <div className="pos-abs content-1285">
              <div className="pos-abs text-1286">
                <span className="text-1286-0 ">{text22}</span>
              </div>
              <div className="pos-abs text-1287">
                <span className="text-1287-0 ">{text23}</span>
              </div>
            </div>
            <div className="pos-abs cards-1288">
              <div className="pos-abs why-choose-us-c-1289">
                <div className="pos-abs icon-container-I1289_29160131">
                  <div className="pos-abs icon-container-I1289_29160132">
                    <div className="pos-abs icon--usercircl-I1289_29160133">
                      <div className="pos-abs vector-I1289_29160134">
                        <div className="nodeBg-I1289_29160134 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pos-abs content-I1289_29160135">
                  <div className="pos-abs text-I1289_29160136">
                    <span className="text-I1289_29160136-0 ">{text24}</span>
                  </div>
                  <div className="pos-abs text-I1289_29160137">
                    <span className="text-I1289_29160137-0 ">{text25}</span>
                  </div>
                </div>
                <div className="pos-abs button-I1289_29160138">
                  <div className="pos-abs text-I1289_29160139">
                    <span className="text-I1289_29160139-0 ">{text26}</span>
                  </div>
                  <div className="pos-abs icon--arrowrigh-I1289_29160140">
                    <div className="pos-abs vector-I1289_29160141">
                      <div className="nodeBg-I1289_29160141 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pos-abs why-choose-us-c-1290">
                <div className="pos-abs icon-container-I1290_29160143">
                  <div className="pos-abs icon-container-I1290_29160144">
                    <div className="pos-abs icon--clock-I1290_29160145">
                      <div className="pos-abs vector-I1290_29160146">
                        <div className="nodeBg-I1290_29160146 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pos-abs content-I1290_29160147">
                  <div className="pos-abs text-I1290_29160148">
                    <span className="text-I1290_29160148-0 ">{text27}</span>
                  </div>
                  <div className="pos-abs text-I1290_29160149">
                    <span className="text-I1290_29160149-0 ">{text28}</span>
                  </div>
                </div>
                <div className="pos-abs button-I1290_29160150">
                  <div className="pos-abs text-I1290_29160151">
                    <span className="text-I1290_29160151-0 ">{text29}</span>
                  </div>
                  <div className="pos-abs icon--arrowrigh-I1290_29160152">
                    <div className="pos-abs vector-I1290_29160153">
                      <div className="nodeBg-I1290_29160153 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pos-abs why-choose-us-c-1291">
                <div className="pos-abs icon-container-I1291_29160155">
                  <div className="pos-abs icon-container-I1291_29160156">
                    <div className="pos-abs icon--money-I1291_29160157">
                      <div className="pos-abs vector-I1291_29160158">
                        <div className="nodeBg-I1291_29160158 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pos-abs content-I1291_29160159">
                  <div className="pos-abs text-I1291_29160160">
                    <span className="text-I1291_29160160-0 ">{text30}</span>
                  </div>
                  <div className="pos-abs text-I1291_29160161">
                    <span className="text-I1291_29160161-0 ">{text31}</span>
                  </div>
                </div>
                <div className="pos-abs button-I1291_29160162">
                  <div className="pos-abs text-I1291_29160163">
                    <span className="text-I1291_29160163-0 ">{text32}</span>
                  </div>
                  <div className="pos-abs icon--arrowrigh-I1291_29160164">
                    <div className="pos-abs vector-I1291_29160165">
                      <div className="nodeBg-I1291_29160165 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pos-abs why-choose-us-c-1292">
                <div className="pos-abs icon-container-I1292_29160167">
                  <div className="pos-abs icon-container-I1292_29160168">
                    <div className="pos-abs icon--plugs-I1292_29160169">
                      <div className="pos-abs vector-I1292_29160170">
                        <div className="nodeBg-I1292_29160170 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pos-abs content-I1292_29160171">
                  <div className="pos-abs text-I1292_29160172">
                    <span className="text-I1292_29160172-0 ">{text33}</span>
                  </div>
                  <div className="pos-abs text-I1292_29160173">
                    <span className="text-I1292_29160173-0 ">{text34}</span>
                  </div>
                </div>
                <div className="pos-abs button-I1292_29160174">
                  <div className="pos-abs text-I1292_29160175">
                    <span className="text-I1292_29160175-0 ">{text35}</span>
                  </div>
                  <div className="pos-abs icon--arrowrigh-I1292_29160176">
                    <div className="pos-abs vector-I1292_29160177">
                      <div className="nodeBg-I1292_29160177 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Feature 11 */}
        <section className="pos-abs feature-1-1293">
          <div className="pos-abs content-1294">
            <div className="pos-abs iphone-14-pro-1295">
              <div className="pos-abs antennas-1304">
                <div className="pos-abs top-1310"></div>
                <div className="pos-abs lefttop-1307"></div>
                <div className="pos-abs right-1309"></div>
                <div className="pos-abs leftbottom-1306"></div>
                <div className="pos-abs rightbottom-1308"></div>
                <div className="pos-abs bottom-1305"></div>
              </div>
              <div className="pos-abs body-1296">
                <div className="pos-abs stroke-body-out-1298"></div>
                <div className="pos-abs screen-backgrou-1297"></div>
                <div className="pos-abs stroke-body-1299">
                  <div className="nodeBg-1299 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
                <div className="pos-abs screen-1300">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/figma-plugin-a7287.appspot.com/o/user-images%2F18-jul-2024%2Falishan khattak1721301791054%2Fimage-1-300.png?alt=media&token=0"
                    className="pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div  object-fit"
                    alt="Screen1 Image"
                  />{" "}
                </div>
              </div>
              <div className="pos-abs notch-1311">
                <div className="pos-abs top-speaker-1312"></div>
              </div>
              <div className="pos-abs front-camera-1318">
                <div className="pos-abs rectangle-1319"></div>
                <div className="pos-abs lens-1-1320"></div>
                <div className="pos-abs lens-1321"></div>
                <div className="pos-abs line-1322"></div>
              </div>
              <div className="pos-abs chatbot-card-1323">
                <div className="pos-abs image-1324">
                  <img
                    src={`${image5}`}
                    className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-1324 object-fit "
                    alt="Image1 Image"
                  />{" "}
                </div>
                <div className="pos-abs details-1325">
                  <div className="pos-abs input-1326">
                    <div className="pos-abs text-1327">
                      <span className="text-1327-0 ">{text36}</span>
                    </div>
                  </div>
                  <div className="pos-abs avatar--name-1328">
                    <div className="pos-abs text-1330">
                      <span className="text-1330-0 ">{text37}</span>
                    </div>
                    <div className="pos-abs image-1329">
                      <img
                        src={`${image6}`}
                        className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-1329 object-fit "
                        alt="Image1 Image"
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="pos-abs buttons-1313">
                <div className="pos-abs silence-button-1316"></div>
                <div className="pos-abs button-1315"></div>
                <div className="pos-abs power-button-1317"></div>
                <div className="pos-abs button-1314"></div>
              </div>
            </div>
          </div>
          <div className="pos-abs content-1331">
            <div className="pos-abs content-1332">
              <div className="pos-abs text-1333">
                <span className="text-1333-0 ">{text38}</span>
              </div>
              <div className="pos-abs text-1334">
                <span className="text-1334-0 ">{text39}</span>
              </div>
            </div>
            <div className="pos-abs button-1335">
              <div className="pos-abs text-I1335_705199">
                <span className="text-I1335_705199-0 ">{text40}</span>
              </div>
            </div>
          </div>
        </section>
        {/* Feature 21 */}
        <section className="pos-abs feature-2-1336">
          <div className="pos-abs content-1342">
            <div className="pos-abs image-1343">
              <img
                src={`${image7}`}
                className="pos-abs image-div bg-no-repeat  bg-crop nodeBg-1343 object-fit "
                alt="Image1 Image"
              />{" "}
            </div>
            <div className="pos-abs prompt-card-1344">
              <div className="pos-abs icon-container-1345">
                <div className="pos-abs icon-container-1346">
                  <div className="pos-abs icon--figmalogo-1347">
                    <div className="pos-abs vector-1348">
                      <div className="nodeBg-1348 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pos-abs content-1349">
                <div className="pos-abs text-1350">
                  <span className="text-1350-0 ">{text41}</span>
                </div>
                <div className="pos-abs text-1351">
                  <span className="text-1351-0 ">{text42}</span>
                </div>
              </div>
            </div>
            <div className="pos-abs prompt-card-1352">
              <div className="pos-abs icon-container-1353">
                <div className="pos-abs icon-container-1354">
                  <div className="pos-abs icon--student-1355">
                    <div className="pos-abs vector-1356">
                      <div className="nodeBg-1356 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pos-abs content-1357">
                <div className="pos-abs text-1358">
                  <span className="text-1358-0 ">{text43}</span>
                </div>
                <div className="pos-abs text-1359">
                  <span className="text-1359-0 ">{text44}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="pos-abs content-1337">
            <div className="pos-abs content-1338">
              <div className="pos-abs text-1339">
                <span className="text-1339-0 ">{text45}</span>
              </div>
              <div className="pos-abs text-1340">
                <span className="text-1340-0 ">{text46}</span>
              </div>
            </div>
            <div className="pos-abs button-1341">
              <div className="pos-abs text-I1341_705199">
                <span className="text-I1341_705199-0 ">{text47}</span>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials1 */}
        <section className="pos-abs testimonials-1360">
          <div className="pos-abs container-1361">
            <div className="pos-abs content-1362">
              <div className="pos-abs text-1363">
                <span className="text-1363-0 ">{text48}</span>
              </div>
              <div className="pos-abs text-1364">
                <span className="text-1364-0 ">{text49}</span>
              </div>
            </div>
            <div className="pos-abs cards-1365">
              <div className="pos-abs testimonial-car-1366">
                <div className="pos-abs container-1367">
                  <div className="pos-abs avatar-1368">
                    <div className="pos-abs image-1369">
                      <img
                        src={`${image8}`}
                        className="pos-abs image-div bg-no-repeat  bg-crop nodeBg-1369 object-fit "
                        alt="Image1 Image"
                      />{" "}
                    </div>
                  </div>
                  <div className="pos-abs content-1370">
                    <div className="pos-abs text-1371">
                      <span className="text-1371-0 ">{text50}</span>
                    </div>
                    <div className="pos-abs details-1372">
                      <div className="pos-abs text-1373">
                        <span className="text-1373-0 ">{text51}</span>
                      </div>
                      <div className="pos-abs text-1374">
                        <span className="text-1374-0 ">{text52}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pos-abs testimonial-car-1375">
                <div className="pos-abs container-1376">
                  <div className="pos-abs avatar-1377">
                    <div className="pos-abs confidentguy-1-1378">
                      <img
                        src={`${image9}`}
                        className="pos-abs image-div bg-no-repeat  bg-crop nodeBg-1378 object-fit "
                        alt="confident-guy 11 Image"
                      />{" "}
                    </div>
                  </div>
                  <div className="pos-abs content-1379">
                    <div className="pos-abs text-1380">
                      <span className="text-1380-0 ">{text53}</span>
                    </div>
                    <div className="pos-abs details-1381">
                      <div className="pos-abs text-1382">
                        <span className="text-1382-0 ">{text54}</span>
                      </div>
                      <div className="pos-abs text-1383">
                        <span className="text-1383-0 ">{text55}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pos-abs testimonial-car-1384">
                <div className="pos-abs container-1385">
                  <div className="pos-abs avatar-1386">
                    <div className="pos-abs c-19615-1-1387">
                      <img
                        src={`${image10}`}
                        className="pos-abs image-div bg-no-repeat  bg-crop nodeBg-1387 object-fit "
                        alt="19615 11 Image"
                      />{" "}
                    </div>
                  </div>
                  <div className="pos-abs content-1388">
                    <div className="pos-abs text-1389">
                      <span className="text-1389-0 ">{text56}</span>
                    </div>
                    <div className="pos-abs details-1390">
                      <div className="pos-abs text-1391">
                        <span className="text-1391-0 ">{text57}</span>
                      </div>
                      <div className="pos-abs text-1392">
                        <span className="text-1392-0 ">{text58}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pos-abs testimonial-car-1393">
                <div className="pos-abs container-1394">
                  <div className="pos-abs avatar-1395">
                    <div className="pos-abs c-2902-1-1396">
                      <img
                        src={`${image11}`}
                        className="pos-abs image-div bg-no-repeat  bg-crop nodeBg-1396 object-fit "
                        alt="2902 11 Image"
                      />{" "}
                    </div>
                  </div>
                  <div className="pos-abs content-1397">
                    <div className="pos-abs text-1398">
                      <span className="text-1398-0 ">{text59}</span>
                    </div>
                    <div className="pos-abs details-1399">
                      <div className="pos-abs text-1400">
                        <span className="text-1400-0 ">{text60}</span>
                      </div>
                      <div className="pos-abs text-1401">
                        <span className="text-1401-0 ">{text61}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pos-abs testimonial-car-1402">
                <div className="pos-abs container-1403">
                  <div className="pos-abs avatar-1404">
                    <div className="pos-abs youngman-1-1405">
                      <img
                        src={`${image12}`}
                        className="pos-abs image-div bg-no-repeat  bg-crop nodeBg-1405 object-fit "
                        alt="young-man 11 Image"
                      />{" "}
                    </div>
                  </div>
                  <div className="pos-abs content-1406">
                    <div className="pos-abs text-1407">
                      <span className="text-1407-0 ">{text62}</span>
                    </div>
                    <div className="pos-abs details-1408">
                      <div className="pos-abs text-1409">
                        <span className="text-1409-0 ">{text63}</span>
                      </div>
                      <div className="pos-abs text-1410">
                        <span className="text-1410-0 ">{text64}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pos-abs testimonial-car-1411">
                <div className="pos-abs container-1412">
                  <div className="pos-abs avatar-1413">
                    <div className="pos-abs maturemansmilin-1414">
                      <img
                        src={`${image13}`}
                        className="pos-abs image-div bg-no-repeat  bg-crop nodeBg-1414 object-fit "
                        alt="mature-man-smiling-happily 11 Image"
                      />{" "}
                    </div>
                  </div>
                  <div className="pos-abs content-1415">
                    <div className="pos-abs text-1416">
                      <span className="text-1416-0 ">{text65}</span>
                    </div>
                    <div className="pos-abs details-1417">
                      <div className="pos-abs text-1418">
                        <span className="text-1418-0 ">{text66}</span>
                      </div>
                      <div className="pos-abs text-1419">
                        <span className="text-1419-0 ">{text67}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pos-abs button-1420">
            <div className="pos-abs text-I1420_705199">
              <span className="text-I1420_705199-0 ">{text68}</span>
            </div>
          </div>
        </section>
        {/* Blogs1 */}
        <section className="pos-abs blogs-1421">
          <div className="pos-abs container-1422">
            <div className="pos-abs content-1423">
              <div className="pos-abs text-1424">
                <span className="text-1424-0 ">{text69}</span>
              </div>
              <div className="pos-abs text-1425">
                <span className="text-1425-0 ">{text70}</span>
              </div>
            </div>
            <div className="pos-abs cards-1426">
              <div className="pos-abs blog-card-1427">
                <div className="pos-abs container-1428">
                  <img
                    src={`${image14}`}
                    className="pos-abs image-div bg-no-repeat  bg-crop nodeBg-1428 object-fit "
                    alt="Container1 Image"
                  />
                  <div className="pos-abs button-1429">
                    <div className="pos-abs text-1430">
                      <span className="text-1430-0 ">{text71}</span>
                    </div>
                  </div>
                  <div className="pos-abs content-1431">
                    <div className="pos-abs content-1432">
                      <div className="pos-abs text-1433">
                        <span className="text-1433-0 ">{text72}</span>
                      </div>
                      <div className="pos-abs text-1434">
                        <span className="text-1434-0 ">{text73}</span>
                      </div>
                    </div>
                    <div className="pos-abs details-1435">
                      <div className="pos-abs text-1436">
                        <span className="text-1436-0 ">{text74}</span>
                      </div>
                      <div className="pos-abs text-1438">
                        <span className="text-1438-0 ">{text75}</span>
                      </div>
                      <div className="pos-abs dot-1437"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pos-abs blog-card-1439">
                <div className="pos-abs container-1440">
                  <img
                    src={`${image15}`}
                    className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-1440 object-fit "
                    alt="Container1 Image"
                  />
                  <div className="pos-abs button-1441">
                    <div className="pos-abs text-1442">
                      <span className="text-1442-0 ">{text76}</span>
                    </div>
                  </div>
                  <div className="pos-abs content-1443">
                    <div className="pos-abs content-1444">
                      <div className="pos-abs text-1445">
                        <span className="text-1445-0 ">{text77}</span>
                      </div>
                      <div className="pos-abs text-1446">
                        <span className="text-1446-0 ">{text78}</span>
                      </div>
                    </div>
                    <div className="pos-abs details-1447">
                      <div className="pos-abs text-1448">
                        <span className="text-1448-0 ">{text79}</span>
                      </div>
                      <div className="pos-abs text-1450">
                        <span className="text-1450-0 ">{text80}</span>
                      </div>
                      <div className="pos-abs dot-1449"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pos-abs button-1451">
            <div className="pos-abs text-I1451_705199">
              <span className="text-I1451_705199-0 ">{text81}</span>
            </div>
          </div>
        </section>
        {/* Footer1 */}
        <section className="pos-abs footer-1452">
          <div className="pos-abs banner-1453">
            <div className="pos-abs image-1458">
              <img
                src={`${image16}`}
                className="pos-abs image-div bg-no-repeat  bg-crop nodeBg-1458 object-fit "
                alt="Image1 Image"
              />{" "}
            </div>
            <div className="pos-abs content-1454">
              <div className="pos-abs text-1455">
                <span className="text-1455-0 ">{text82}</span>
              </div>
              <div className="pos-abs text-1456">
                <span className="text-1456-0 ">{text83}</span>
              </div>
            </div>
            <div className="pos-abs image-1459">
              <img
                src={`${image17}`}
                className="pos-abs image-div bg-no-repeat  bg-crop nodeBg-1459 object-fit "
                alt="Image2 Image"
              />{" "}
            </div>
            <div className="pos-abs button-1457">
              <div className="pos-abs text-I1457_2293248">
                <span className="text-I1457_2293248-0 ">{text84}</span>
              </div>
            </div>
          </div>
          <div className="pos-abs footer-1460">
            <div className="pos-abs top-I1460_29160499">
              <div className="pos-abs left-I1460_29160500">
                <div className="pos-abs logo-I1460_29160501">
                  <div className="pos-abs logo-I1460_29160501_23102293"></div>
                  <div className="pos-abs text-I1460_29160501_2291873">
                    <span className="text-I1460_29160501_2291873-0 ">
                      {text85}
                    </span>
                  </div>
                </div>
                <div className="pos-abs text-I1460_29160502">
                  <span className="text-I1460_29160502-0 ">{text86}</span>
                </div>
                <div className="pos-abs text-I1460_29160503">
                  <span className="text-I1460_29160503-0 ">{text87}</span>
                </div>
              </div>
              <div className="pos-abs right-I1460_29160504">
                <div className="pos-abs row-I1460_29160505">
                  <div className="pos-abs text-I1460_29160506">
                    <span className="text-I1460_29160506-0 ">{text88}</span>
                  </div>
                  <div className="pos-abs text-I1460_29160507">
                    <span className="text-I1460_29160507-0 ">{text89}</span>
                  </div>
                  <div className="pos-abs text-I1460_29160508">
                    <span className="text-I1460_29160508-0 ">{text90}</span>
                  </div>
                  <div className="pos-abs text-I1460_29160509">
                    <span className="text-I1460_29160509-0 ">{text91}</span>
                  </div>
                  <div className="pos-abs text-I1460_29160510">
                    <span className="text-I1460_29160510-0 ">{text92}</span>
                  </div>
                </div>
                <div className="pos-abs row-I1460_29160511">
                  <div className="pos-abs text-I1460_29160512">
                    <span className="text-I1460_29160512-0 ">{text93}</span>
                  </div>
                  <div className="pos-abs text-I1460_29160513">
                    <span className="text-I1460_29160513-0 ">{text94}</span>
                  </div>
                  <div className="pos-abs text-I1460_29160514">
                    <span className="text-I1460_29160514-0 ">{text95}</span>
                  </div>
                  <div className="pos-abs text-I1460_29160515">
                    <span className="text-I1460_29160515-0 ">{text96}</span>
                  </div>
                </div>
                <div className="pos-abs row-I1460_29160516">
                  <div className="pos-abs text-I1460_29160517">
                    <span className="text-I1460_29160517-0 ">{text97}</span>
                  </div>
                  <div className="pos-abs text-I1460_29160518">
                    <span className="text-I1460_29160518-0 ">{text98}</span>
                  </div>
                  <div className="pos-abs text-I1460_29160519">
                    <span className="text-I1460_29160519-0 ">{text99}</span>
                  </div>
                  <div className="pos-abs text-I1460_29160520">
                    <span className="text-I1460_29160520-0 ">{text100}</span>
                  </div>
                  <div className="pos-abs text-I1460_29160521">
                    <span className="text-I1460_29160521-0 ">{text101}</span>
                  </div>
                </div>
                <div className="pos-abs row-I1460_29160522">
                  <div className="pos-abs text-I1460_29160523">
                    <span className="text-I1460_29160523-0 ">{text102}</span>
                  </div>
                  <div className="pos-abs text-I1460_29160524">
                    <span className="text-I1460_29160524-0 ">{text103}</span>
                  </div>
                  <div className="pos-abs text-I1460_29160525">
                    <span className="text-I1460_29160525-0 ">{text104}</span>
                  </div>
                  <div className="pos-abs text-I1460_29160526">
                    <span className="text-I1460_29160526-0 ">{text105}</span>
                  </div>
                  <div className="pos-abs text-I1460_29160527">
                    <span className="text-I1460_29160527-0 ">{text106}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pos-abs bottom-I1460_29160528">
              <div className="pos-abs text-I1460_29160529">
                <span className="text-I1460_29160529-0 ">{text107}</span>
              </div>
            </div>
          </div>
          <div className="pos-abs vector-1640">
            <div className="nodeBg-1640 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Component;
