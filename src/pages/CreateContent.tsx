import { useState, useRef, useEffect } from "react";
import { iphonechip } from "../utils";
import { RiDragMoveLine } from "react-icons/ri";
import { BsPlus } from "react-icons/bs";
import { BiSolidImageAdd } from "react-icons/bi";

interface ContentItem {
  type: "paragraph" | "image";
  content: string;
}

const CreateContent = () => {
  const [title, setTitle] = useState<string>("");
  const [contentList, setContentList] = useState<ContentItem[]>([]);
  const textRefs = useRef<(HTMLTextAreaElement | null)[]>([]);
  const titleRef = useRef<HTMLTextAreaElement | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    textRefs.current = textRefs.current.slice(0, contentList.length);
    console.log(contentList);
  }, [contentList]);

  const adjustAllHeights = () => {
    setTimeout(() => {
      textRefs.current.forEach((el) => {
        if (el) {
          el.style.height = "auto";
          el.style.height = el.scrollHeight + "px";
        }
      });
    }, 0);
  };

  return (
    <div className="p-5 relative min-h-screen">
      <div className="w-full h-full flex flex-col gap-5">
        <div className="w-full h-70 bg-gray-200">
          <img src={iphonechip} alt="" className="w-full h-full object-cover" />
        </div>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (!file) return;

            const imageUrl = URL.createObjectURL(file);

            const newContent = [...contentList];
            const insertIdx = fileInputRef.current?.dataset.idx
              ? Number(fileInputRef.current.dataset.idx)
              : newContent.length;

            newContent[insertIdx] = {
              type: "image",
              content: imageUrl,
            };

            newContent.splice(insertIdx + 1, 0, {
              type: "paragraph",
              content: "",
            });

            setContentList(newContent);
            setClickedIndex(null);

            setTimeout(() => {
              const nextEl = textRefs.current[insertIdx + 1];
              if (nextEl) {
                nextEl.focus();
              }
            }, 0);

            // temizlik
            e.target.value = "";
          }}
        />
        <form className="w-full flex flex-col gap-5">
          <div className="flex flex-col gap-4">
            {/* Title textarea */}
            <textarea
              ref={titleRef}
              value={title}
              placeholder="Başlık ekle..."
              className="w-full placeholder-gray-400 focus:outline-none resize-none overflow-hidden text-4xl font-medium leading-tight"
              rows={1}
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = "auto";
                target.style.height = Math.max(target.scrollHeight, 24) + "px";
                setTitle(target.value);
              }}
              onKeyDown={(e) => {
                const target = e.target as HTMLTextAreaElement;

                // Aşağı ok ile ilk content'e geç
                if (e.key === "ArrowDown") {
                  e.preventDefault();
                  if (contentList.length > 0) {
                    const first = textRefs.current[0];
                    if (first) {
                      first.focus();
                      first.setSelectionRange(0, 0);
                    }
                  }
                }

                // Enter → yeni content oluştur
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  const cursorPos = target.selectionStart;
                  const content = target.value;
                  const newContent = [...contentList];
                  if (cursorPos === content.length) {
                    newContent.splice(0, 0, {
                      type: "paragraph",
                      content: "",
                    });
                    setContentList(newContent);
                    adjustAllHeights();
                    setTimeout(() => {
                      textRefs.current[0]?.focus();
                      textRefs.current[0]?.setSelectionRange(0, 0);
                    }, 0);
                  }
                }

                // Backspace → title boşsa hiçbir şey yapma
                // (ilk content textarea'ya geri geçiş buradan değil oradan yapılacak)
              }}
            />
            {/* Content textareas */}
            {contentList.map((item, idx) => (
              <div
                key={idx}
                tabIndex={0}
                className={`w-full ${
                  item.type === "image" ? "h-full" : ""
                } flex relative rounded-lg overflow-hidden border-2 transition-all ${
                  focusedIndex === idx && item.type === "image"
                    ? "border-green-600"
                    : "border-transparent"
                }`}
                onFocus={() => setFocusedIndex(idx)}
                onBlur={() => setFocusedIndex(null)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowUp" && idx > 0) {
                    e.preventDefault();
                    // Bir üst element paragraf ise oraya focus yap
                    if (contentList[idx - 1].type === "paragraph") {
                      textRefs.current[idx - 1]?.focus();
                    } else {
                      // üstte yine image varsa onu focusla
                      const prevImg = document.querySelector(
                        `[data-img-idx="${idx - 1}"]`
                      ) as HTMLElement;
                      prevImg?.focus();
                    }
                  }
                  if (e.key === "ArrowDown" && idx < contentList.length - 1) {
                    e.preventDefault();
                    // Alt element paragraf ise oraya focus yap
                    if (contentList[idx + 1].type === "paragraph") {
                      textRefs.current[idx + 1]?.focus();
                    } else {
                      // altta yine image varsa onu focusla
                      const nextImg = document.querySelector(
                        `[data-img-idx="${idx + 1}"]`
                      ) as HTMLElement;
                      nextImg?.focus();
                    }
                  }
                  if (e.key === "Backspace") {
                    if (item.type === "image") {
                      // sadece görselse özel silme işlemi
                      e.preventDefault();
                      const newList = [...contentList];
                      newList.splice(idx, 1);
                      setContentList(newList);

                      // 🔄 focus'u bir sonraki veya önceki öğeye taşı
                      setTimeout(() => {
                        if (contentList[idx + 1]) {
                          if (contentList[idx + 1].type === "image") {
                            const nextImg = document.querySelector(
                              `[data-img-idx="${idx}"]`
                            ) as HTMLElement;
                            nextImg?.focus();
                          } else {
                            textRefs.current[idx]?.focus();
                          }
                        } else if (contentList[idx - 1]) {
                          if (contentList[idx - 1].type === "image") {
                            const prevImg = document.querySelector(
                              `[data-img-idx="${idx - 1}"]`
                            ) as HTMLElement;
                            prevImg?.focus();
                          } else {
                            textRefs.current[idx - 1]?.focus();
                          }
                        }
                      }, 0);
                    }
                  }
                }}
                data-img-idx={idx}
              >
                {item.type === "image" ? (
                  <div className="w-full h-full flex relative">
                    {item.content ? (
                      <>
                        <img
                          src={item.content}
                          alt="uploaded"
                          className="w-full h-full object-contain rounded-lg"
                        />
                        <div className="absolute right-5 top-2">
                          <button
                            className="bg-red-500 text-white rounded px-4 py-0.5 cursor-pointer hover:bg-red-600 text-xs"
                            onClick={() => {
                              const newContent = [...contentList];
                              newContent.splice(idx, 1);
                              setContentList(newContent);
                            }}
                          >
                            Sil
                          </button>
                        </div>
                      </>
                    ) : (
                      <span className="text-gray-400">Görsel seçilmedi</span>
                    )}
                  </div>
                ) : (
                  <div className="relative w-full">
                    <textarea
                      ref={(el) => (textRefs.current[idx] = el)}
                      value={item.content}
                      placeholder={
                        clickedIndex !== idx
                          ? idx === 0
                            ? "Bu paragraf içerik açıklaması olarak gösterilecektir..."
                            : "Paragraf ekle..."
                          : ""
                      }
                      className={`w-full placeholder-gray-400 focus:outline-none resize-none overflow-hidden text-base leading-relaxed ${
                        focusedIndex === idx && item.content === ""
                          ? "pl-10"
                          : "pl-0"
                      } pr-8`}
                      rows={1}
                      onFocus={() => setFocusedIndex(idx)}
                      onBlur={() => setFocusedIndex(null)}
                      onInput={(e) => {
                        const target = e.target as HTMLTextAreaElement;
                        target.style.height = "auto";
                        target.style.height = target.scrollHeight + "px";
                        const newContent = [...contentList];
                        newContent[idx].content = target.value;
                        setContentList(newContent);
                        adjustAllHeights();
                      }}
                      onKeyDown={(e) => {
                        const target = e.target as HTMLTextAreaElement;
                        /* Yukarı ok */
                        if (e.key === "ArrowUp") {
                          const isAtTop =
                            target.selectionStart === 0 &&
                            target.scrollTop === 0;

                          if (isAtTop) {
                            e.preventDefault();
                            if (idx > 0) {
                              const prev = textRefs.current[idx - 1];
                              if (prev) {
                                prev.focus();
                                const len = prev.value.length;
                                prev.setSelectionRange(len, len);
                              }
                            } else {
                              const titleEl = titleRef.current;
                              if (titleEl) {
                                titleEl.focus();
                                const len = titleEl.value.length;
                                titleEl.setSelectionRange(len, len);
                              }
                            }
                          }
                        }
                        /* ↓ Aşağı ok */
                        if (e.key === "ArrowDown") {
                          const isAtBottom =
                            target.selectionStart === target.value.length &&
                            target.scrollTop + target.clientHeight >=
                              target.scrollHeight;

                          if (isAtBottom) {
                            e.preventDefault();
                            if (idx < contentList.length - 1) {
                              const next = textRefs.current[idx + 1];
                              if (next) {
                                next.focus();
                                next.setSelectionRange(0, 0);
                              }
                            }
                          }
                          setClickedIndex(null);
                        }
                        /* Enter → yeni alan ekle */
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          const cursorPos = target.selectionStart;
                          const content = target.value;
                          const newContent = [...contentList];

                          // 1️⃣ Cursor en başta → tüm içeriği yeni textarea'ya taşı
                          if (cursorPos === 0 && content.length > 0) {
                            const currentContent = newContent[idx].content; //mevcut içeriği al
                            newContent[idx].content = ""; // mevcut alanı boşalt
                            newContent.splice(idx + 1, 0, {
                              type: "paragraph",
                              content: currentContent,
                            }); // tüm metni yeni alana taşı
                            setContentList(newContent);
                            adjustAllHeights();
                            setTimeout(() => {
                              const currentEl = textRefs.current[idx];
                              if (currentEl) {
                                currentEl.focus();
                                currentEl.setSelectionRange(0, 0); // cursor'u başa al
                              }
                            }, 0);
                            setClickedIndex(null);
                            return;
                          }

                          // 2️⃣ Cursor ortadaysa → ikiye böl
                          if (cursorPos < content.length) {
                            const before = content.slice(0, cursorPos);
                            const after = content.slice(cursorPos);
                            newContent[idx].content = before;
                            newContent.splice(idx + 1, 0, {
                              type: "paragraph",
                              content: after,
                            });
                            setContentList(newContent);
                            adjustAllHeights();
                            setTimeout(() => {
                              const nextEl = textRefs.current[idx + 1];
                              if (nextEl) {
                                nextEl.focus();
                                nextEl.setSelectionRange(0, 0); // cursor'u başa al
                              }
                            }, 0);
                            setClickedIndex(null);
                            return;
                          }

                          // 3️⃣ Cursor sondaysa → klasik davranış (yeni boş alan oluştur)
                          if (cursorPos === content.length) {
                            newContent.splice(idx + 1, 0, {
                              type: "paragraph",
                              content: "",
                            });
                            setContentList(newContent);
                            adjustAllHeights();
                            setTimeout(() => {
                              textRefs.current[idx + 1]?.focus();
                            }, 0);
                            setClickedIndex(null);
                          }
                        }
                        /* Backspace → alan boşsa önceki textarea’ya geç */
                        if (e.key === "Backspace") {
                          // Cursor en baştaysa ve alan doluysa → önceki textarea ile birleştir
                          if (
                            target.selectionStart === 0 &&
                            target.selectionEnd === 0 &&
                            target.value.length > 0 &&
                            idx > 0
                          ) {
                            e.preventDefault();
                            const newContent = [...contentList];
                            const prev = newContent[idx - 1];
                            if (prev) {
                              const prevContentLength = prev.content.length;
                              prev.content += target.value; // mevcut içeriği önceki textarea'ya ekle
                              newContent.splice(idx, 1); // bu textarea'yı kaldır
                              setContentList(newContent);
                              adjustAllHeights();
                              setTimeout(() => {
                                const prevEl = textRefs.current[idx - 1];
                                if (prevEl) {
                                  prevEl.focus();
                                  // const len = prevEl.value.length;
                                  // prevEl.setSelectionRange(len, len); // cursor'u sonuna al
                                  prevEl.setSelectionRange(
                                    prevContentLength,
                                    prevContentLength
                                  ); // cursor'u birleşen kısmın sonuna al
                                }
                              }, 0);
                            }
                          }
                          // Eğer tamamen boşsa → önceki textarea'ya geç
                          else if (target.value === "") {
                            e.preventDefault();
                            if (idx > 0) {
                              const newContent = [...contentList];

                              // Önceki öğe image ise → onu sil
                              if (newContent[idx - 1].type === "image") {
                                newContent.splice(idx - 1, 1);
                                setContentList(newContent);
                                adjustAllHeights();
                                setTimeout(() => {
                                  const current =
                                    textRefs.current[idx - 1] ||
                                    textRefs.current[idx - 2];
                                  if (current) current.focus();
                                }, 0);
                                return;
                              }

                              newContent.splice(idx, 1);
                              setContentList(newContent);
                              adjustAllHeights();
                              setTimeout(() => {
                                const prev = textRefs.current[idx - 1];
                                if (prev) {
                                  prev.focus();
                                  const len = prev.value.length;
                                  prev.setSelectionRange(len, len); // cursor'u sonuna al
                                }
                              }, 0);
                            } else {
                              // İlk content silinmişse title’a geç
                              setContentList((prev) => prev.slice(1));
                              adjustAllHeights();
                              setTimeout(() => {
                                const t = titleRef.current;
                                if (t) {
                                  t.focus();
                                  const len = t.value.length;
                                  t.setSelectionRange(len, len);
                                }
                              }, 0);
                            }
                          }
                        }
                      }}
                    />
                    <button
                      draggable
                      onDragStart={(e) => {
                        e.dataTransfer.setData("text/plain", idx.toString());
                      }}
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={(e) => {
                        e.preventDefault();
                        const draggedIdx = Number(
                          e.dataTransfer.getData("text/plain")
                        );
                        if (isNaN(draggedIdx) || draggedIdx === idx) return;

                        // reorder array
                        const newList = [...contentList];
                        const [draggedItem] = newList.splice(draggedIdx, 1);
                        newList.splice(idx, 0, draggedItem);
                        setContentList(newList);

                        // after React re-renders, make sure each textarea's height is reset to its scrollHeight
                        // so that items keep their visual heights when reordered.
                        setTimeout(() => {
                          textRefs.current.forEach((el) => {
                            if (el) {
                              el.style.height = "auto";
                              el.style.height = el.scrollHeight + "px";
                            }
                          });
                        }, 0);
                      }}
                      className={`absolute right-0 top-1 `}
                    >
                      <RiDragMoveLine
                        size={20}
                        className="text-gray-400 cursor-move"
                      />
                    </button>
                    {/* Plus butonu — sadece focus olan textarea’da görünür */}
                    {(focusedIndex === idx || clickedIndex === idx) &&
                      item.content === "" && (
                        <>
                          <div
                            className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center cursor-pointer select-none"
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => {
                              setClickedIndex(idx);
                              const el = textRefs.current[idx];
                              if (!clicked) {
                                setClicked(true);
                                if (el) el.blur();
                              } else {
                                setClicked(false);
                                if (el) el.focus();
                              }
                            }}
                          >
                            <BsPlus
                              size={24}
                              className={`transition-all ${
                                clicked ? "rotate-45" : ""
                              }`}
                            />
                          </div>
                        </>
                      )}
                    {/* Menü — sadece tıklanan textarea’da görünür */}
                    {clickedIndex === idx && clicked && (
                      <div className="absolute left-10 top-1/2 -translate-y-1/2 bg-white text-black rounded-3xl shadow-lg px-4 py-1 z-10">
                        <ul className="flex items-center gap-2">
                          <li className="w-6 h-6 rounded-full border border-black flex items-center justify-center transition-all hover:bg-gray-200 cursor-pointer">
                            <BiSolidImageAdd
                              size={12}
                              className="text-black"
                              onClick={() => {
                                if (fileInputRef.current) {
                                  fileInputRef.current.dataset.idx =
                                    idx.toString();
                                  fileInputRef.current.click(); // Finder açılır
                                }
                                setClickedIndex(null);
                                setClicked(false);
                              }}
                            />
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateContent;
