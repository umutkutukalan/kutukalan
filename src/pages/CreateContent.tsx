import { useState, useRef, useEffect } from "react";
import { iphonechip } from "../utils";
import { RiDragMoveLine } from "react-icons/ri";

interface ContentItem {
  type: "paragraph" | "image";
  content: string;
}

const CreateContent = () => {
  const [title, setTitle] = useState<string>("");
  const [contentList, setContentList] = useState<ContentItem[]>([]);
  const textRefs = useRef<(HTMLTextAreaElement | null)[]>([]);
  const titleRef = useRef<HTMLTextAreaElement | null>(null);

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
        <form className="w-full flex flex-col gap-5">
          <div className="flex flex-col gap-4">
            {/* Title textarea */}
            <textarea
              ref={titleRef}
              value={title}
              placeholder="Title"
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
              <div key={idx}>
                {item.type === "paragraph" ? (
                  <div className="relative w-full">
                    <textarea
                      ref={(el) => (textRefs.current[idx] = el)}
                      value={item.content}
                      placeholder="Paragraph"
                      className="w-full placeholder-gray-400 focus:outline-none resize-none overflow-hidden text-base leading-relaxed pr-8"
                      rows={1}
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

                        // ↑ Yukarı ok
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

                        // ↓ Aşağı ok
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
                        }

                        // Enter → yeni alan ekle
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
                          }
                        }

                        // Backspace → alan boşsa önceki textarea’ya geç
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
                  </div>
                ) : (
                  <div className="w-full h-60 bg-gray-300 flex items-center justify-center">
                    Image Preview
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
            +
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateContent;
