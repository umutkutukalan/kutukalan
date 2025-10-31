import { useState, useRef, useEffect } from "react";
import { iphonechip } from "../utils";

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
                // Enter → yeni content oluştur
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  if (title.trim() !== "") {
                    if (contentList.length === 0) {
                      setContentList([{ type: "paragraph", content: "" }]);
                      setTimeout(() => {
                        textRefs.current[0]?.focus();
                      }, 0);
                    } else {
                      textRefs.current[0]?.focus();
                    }
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
                  <textarea
                    ref={(el) => (textRefs.current[idx] = el)}
                    value={item.content}
                    placeholder="Paragraph"
                    className="w-full placeholder-gray-400 focus:outline-none resize-none overflow-hidden text-base leading-relaxed"
                    rows={1}
                    onInput={(e) => {
                      const target = e.target as HTMLTextAreaElement;
                      target.style.height = "auto";
                      target.style.height = target.scrollHeight + "px";
                      const newContent = [...contentList];
                      newContent[idx].content = target.value;
                      setContentList(newContent);
                    }}
                    onKeyDown={(e) => {
                      const target = e.target as HTMLTextAreaElement;

                      // Enter → yeni alan ekle
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        if (target.value.trim() !== "") {
                          const newContent = [...contentList];
                          newContent[idx].content = target.value;
                          newContent.splice(idx + 1, 0, {
                            type: "paragraph",
                            content: "",
                          });
                          setContentList(newContent);
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
