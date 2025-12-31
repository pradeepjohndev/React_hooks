import { useState } from "react";
import { Collapse } from "react-collapse";
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from "react-icons/fa";

export default function Collapse_able() {
    const [fruitOpen, setFruitOpen] = useState(false);
    const [priceOpen, setPriceOpen] = useState(false);
    const [sizeOpen, setSizeOpen] = useState(false);

    return (
        <div style={{ width: "500px", border: "1px solid #ccc", padding: "10px" }}>

            <div onClick={() => setFruitOpen(!fruitOpen)}
                style={{
                    fontWeight: "bold", cursor: "pointer", fontWeight: "bold",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "baseline",
                }}>
                Fruits {fruitOpen ? <FaArrowAltCircleUp /> : <FaArrowAltCircleDown />}
            </div>

            <Collapse isOpened={fruitOpen}>
                <div style={{ marginLeft: "15px", marginTop: "10px" }}>

                    {/* PRICE (CHILD) */}
                    <div onClick={() => setPriceOpen(!priceOpen)}
                        style={{ cursor: "pointer", fontWeight: "500" }}>
                        💰 Price {priceOpen ? "−" : "+"}
                    </div>

                    <Collapse isOpened={priceOpen}>
                        <div style={{ marginLeft: "15px" }}>
                            <label><input type="checkbox" /> Below ₹100</label><br />
                            <label><input type="checkbox" /> ₹100 - ₹300</label>
                        </div>
                    </Collapse>

                    {/* SIZE (CHILD) */}
                    <div
                        onClick={() => setSizeOpen(!sizeOpen)}
                        style={{ cursor: "pointer", fontWeight: "500", marginTop: "10px" }}
                    >
                        📏 Size {sizeOpen ? "−" : "+"}
                    </div>

                    <Collapse isOpened={sizeOpen}>
                        <div style={{ marginLeft: "15px" }}>
                            <label><input type="checkbox" /> Small</label><br />
                            <label><input type="checkbox" /> Medium</label><br />
                            <label><input type="checkbox" /> Large</label>
                        </div>
                    </Collapse>

                </div>
            </Collapse>
        </div>
    );
}
