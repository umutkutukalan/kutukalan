import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { RiDragMoveLine } from "react-icons/ri";
import { BsPlus } from "react-icons/bs";
import { BiSolidImageAdd } from "react-icons/bi";

import { BsCardImage } from "react-icons/bs";
import { BsFileImage } from "react-icons/bs";
import { MdOutlineImage } from "react-icons/md";

// import { LuImagePlus } from "react-icons/lu";
import { nikegreen } from "../utils";
import { useUser } from "../hooks/useUserContext";
import { technologies } from "../constants";

interface ContentItem {
  id: string;
  type: "paragraph" | "image";
  content: string;
}

interface ProjectTechnologiest {
  value: string;
  icon: string;
}

const CreateContent = () => {
  const { user } = useUser();
  console.log(user);

  const [contentType, setContentType] = useState<string>("");
  const [projectTechnologies, setProjectTechnologies] = useState<
    ProjectTechnologiest[]
  >([]);

  const [title, setTitle] = useState<string>("");

  // const [mainImg, setMainImg] = useState<string>("");
  const mainImgInputRef = useRef<HTMLInputElement | null>(null);

  const [contentList, setContentList] = useState<ContentItem[]>([]);

  const textRefs = useRef<(HTMLTextAreaElement | null)[]>([]);
  const titleRef = useRef<HTMLTextAreaElement | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const [clicked, setClicked] = useState(false);

  const [imageSizes, setImageSizes] = useState<
    Record<string, "small" | "medium" | "large">
  >({});

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

  useLayoutEffect(() => {
    if (
      focusedIndex !== null &&
      typeof focusedIndex === "number" &&
      textRefs.current[focusedIndex]
    ) {
      const el = textRefs.current[focusedIndex];
      if (el) {
        // Textarea yüksekliğini içeriğe göre ayarla
        el.style.height = "auto";
        el.style.height = el.scrollHeight + "px";

        // Eğer textarea ekranın altına taşmışsa scroll et
        const rect = el.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        if (rect.bottom > viewportHeight) {
          el.scrollIntoView({ behavior: "auto", block: "nearest" });
        }
      }
    }
  }, [contentList, focusedIndex]);

  console.log(contentList);
  console.log(projectTechnologies);

  return (
    <div
      className="p-20 relative"
      // Boş alana tıklayınca yeni paragraf ekle
      onClick={(e) => {
        // Eğer tıklanan element textarea veya image değilse yeni bir paragraf ekle
        if (e.target === e.currentTarget) {
          setContentList((prev) => [
            ...prev,
            { id: crypto.randomUUID(), type: "paragraph", content: "" },
          ]);
          setFocusedIndex(contentList.length);
        }
      }}
    >
      <div className="w-full h-full flex flex-col gap-5">
        <div className="w-full border-b border-gray-200 pb-5">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img
                  src={nikegreen}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-400 text-sm">
                {user?.firstName} {user?.lastName}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-2 gap-2">
                <select
                  name="contentType"
                  id="contentType"
                  className="border border-gray-700 rounded-md px-3 py-1 text-xs w-full focus:outline-none"
                  onChange={(e) => setContentType(e.target.value)}
                  onClick={() => {
                    if (contentType !== "project") {
                      setProjectTechnologies([]);
                    } else return;
                  }}
                >
                  <option value="">Kategori Seçin</option>
                  <option value="project" selected={contentType === "project"}>
                    Proje
                  </option>
                  <option value="blog" selected={contentType === "blog"}>
                    Blog
                  </option>
                </select>
                <div className="grid grid-cols-2 gap-2">
                  {contentType === "project" && (
                    <>
                      <select
                        name="technologies"
                        id="technologies"
                        className="border border-gray-700 rounded-md px-3 py-1 text-xs w-full focus:outline-none"
                        onChange={(e) => {
                          const value = e.target.value;
                          if (!value) return;

                          const selectedTech = technologies.find(
                            (t) => t.title === value
                          );
                          if (!selectedTech) return;

                          setProjectTechnologies((prev) =>
                            prev.find((tech) => tech.value === value)
                              ? prev.filter((tech) => tech.value !== value)
                              : [...prev, { value, icon: selectedTech.icon }]
                          );

                          // seçimi sıfırla (aynı seçimi tekrar yapabilmek için)
                          e.target.value = "";
                        }}
                      >
                        <option value="">Teknoloji Seçin</option>
                        {technologies.map((tech) => (
                          <option key={tech.id} value={tech.title}>
                            {tech.title}
                          </option>
                        ))}
                      </select>
                      <input
                        type="text"
                        className="border border-gray-700 rounded-md px-3 py-1 text-xs focus:outline-none"
                        placeholder="Github Url"
                      />
                    </>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {projectTechnologies.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={tech.value}
                      className="px-2 py-1 bg-gray-700 text-white rounded-md text-xs cursor-pointer flex items-center gap-1"
                      onClick={() =>
                        setProjectTechnologies((prev) =>
                          prev.filter((t) => t !== tech)
                        )
                      }
                    >
                      <Icon size={16} />
                      <span>{tech.value}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* <div
          className="w-full h-80 rounded-lg overflow-hidden cursor-pointer relative border border-white/20"
          onClick={() => mainImgInputRef.current?.click()} // tıklanınca file input açılsın
        >
          {mainImg ? (
            <div className="w-full h-full">
              <img
                src={mainImg}
                alt="main"
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500 hover:bg-gray-400 transition-colors">
              <LuImagePlus size={40} />
            </div>
          )}
        </div> */}
        {/* Main Image Input */}
        <input
          type="file"
          accept="image/*"
          ref={mainImgInputRef}
          style={{ display: "none" }}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (!file) return;
            const imageUrl = URL.createObjectURL(file);
            setMainImg(imageUrl); // 🔹 seçilen resmi mainImg state'ine kaydet
            e.target.value = ""; // input temizliği
          }}
        />
        {/* Content Input */}
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
              id: crypto.randomUUID(),
              type: "image",
              content: imageUrl,
            };
            newContent.splice(insertIdx + 1, 0, {
              id: crypto.randomUUID(),
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
          {/* Title & Contents */}
          <div className="flex flex-col gap-4">
            {/* Title textarea */}
            <textarea
              ref={titleRef}
              value={title}
              placeholder="Başlık ekle..."
              className="w-full placeholder-gray-400 focus:outline-none resize-none overflow-hidden text-4xl font-medium leading-tight roboto"
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
                      id: crypto.randomUUID(),
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

                  const newList = [...contentList];
                  const [draggedItem] = newList.splice(draggedIdx, 1);
                  newList.splice(idx, 0, draggedItem);
                  setContentList(newList);

                  // textarea yüksekliklerini yeniden ayarla
                  setTimeout(() => {
                    textRefs.current.forEach((el) => {
                      if (el) {
                        el.style.height = "auto";
                        el.style.height = el.scrollHeight + "px";
                      }
                    });
                  }, 0);
                }}
                className={`w-full ${
                  item.type === "image" ? "h-full" : ""
                } flex relative rounded-lg overflow-hidden border-2 focus-visible:outline-none transition-all ${
                  focusedIndex === idx && item.type === "image"
                    ? "border-green-600"
                    : "border-transparent"
                }`}
                onFocus={() => setFocusedIndex(idx)}
                onBlur={(e) => {
                  if (
                    e.relatedTarget &&
                    e.currentTarget.contains(e.relatedTarget)
                  ) {
                    return;
                  }
                  setFocusedIndex(null);
                }}
                onKeyDown={(e) => {
                  const target = e.target as HTMLTextAreaElement;
                  if (e.key === "ArrowUp" && idx > 0) {
                    if (item.type === "paragraph") {
                      const isAtTop =
                        target.selectionStart === 0 && target.scrollTop === 0;

                      // Eğer hala textarea içinde geziniyorsa (en üste ulaşmadıysa) çık
                      if (!isAtTop) return;
                    }

                    e.preventDefault();
                    // Bir üst element paragraf ise oraya focus yap
                    if (contentList[idx - 1].type === "paragraph") {
                      const prevText = textRefs.current[idx - 1];
                      if (prevText) {
                        prevText.focus();
                        const len = prevText.value.length;
                        prevText.setSelectionRange(len, len);
                      }
                    } else {
                      // üstte yine image varsa onu focusla
                      const prevImg = imageRefs.current[idx - 1];
                      if (prevImg) {
                        prevImg?.focus();
                        setFocusedIndex(idx - 1);
                      }
                    }
                  }
                  // 🔽 Aşağı ok
                  if (e.key === "ArrowDown" && idx < contentList.length - 1) {
                    const nextItem = contentList[idx + 1];

                    if (item.type === "paragraph") {
                      const isAtBottom =
                        target.selectionStart === target.value.length &&
                        target.scrollTop + target.clientHeight >=
                          target.scrollHeight;

                      // Eğer hala textarea içinde geziniyorsa (en alta ulaşmadıysa) çık
                      if (!isAtBottom) return;
                    }

                    e.preventDefault();

                    // alt öğe paragraf ise
                    if (nextItem.type === "paragraph") {
                      const nextText = textRefs.current[idx + 1];
                      if (nextText) {
                        nextText.focus();
                        nextText.setSelectionRange(0, 0);
                      }
                    }

                    // alt öğe image ise
                    else if (nextItem.type === "image") {
                      const nextImg = imageRefs.current[idx + 1];
                      if (nextImg) {
                        nextImg.focus();
                        setFocusedIndex(idx + 1);
                      }
                    }
                  }
                  // 1️⃣ Shift + Enter → satır sonu ekle
                  if (
                    e.key === "Enter" &&
                    e.shiftKey &&
                    item.type === "paragraph"
                  ) {
                    e.preventDefault();
                    const cursorPos = target.selectionStart;
                    const content = target.value;

                    const newText =
                      content.slice(0, cursorPos) +
                      "\n" +
                      content.slice(cursorPos);

                    const newContent = [...contentList];
                    newContent[idx].content = newText;
                    setContentList(newContent);

                    setTimeout(() => {
                      const el = textRefs.current[idx];
                      if (el) {
                        el.focus();
                        el.setSelectionRange(cursorPos + 1, cursorPos + 1);
                      }
                    }, 0);

                    return; // ⚠️ burası önemli: diğer Enter bloklarına geçmesin
                  } else if (
                    /* Enter → yeni alan ekle */
                    e.key === "Enter" &&
                    !e.shiftKey &&
                    item.type === "paragraph"
                  ) {
                    e.preventDefault();
                    const cursorPos = target.selectionStart;
                    const content = target.value;
                    const newContent = [...contentList];

                    // 1️⃣ Cursor en başta → tüm içeriği yeni textarea'ya taşı
                    if (cursorPos === 0 && content.length > 0) {
                      const currentContent = newContent[idx].content; //mevcut içeriği al
                      newContent[idx].content = ""; // mevcut alanı boşalt
                      newContent.splice(idx + 1, 0, {
                        id: crypto.randomUUID(),
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
                        id: crypto.randomUUID(),
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
                        id: crypto.randomUUID(),
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
                  // 🔄 Image iken Enter → altına yeni paragraf ekle
                  else if (e.key === "Enter" && item.type === "image") {
                    e.preventDefault();
                    const newList = [...contentList];
                    newList.splice(idx + 1, 0, {
                      id: crypto.randomUUID(),
                      type: "paragraph",
                      content: "",
                    });
                    setContentList(newList);
                    setTimeout(() => {
                      textRefs.current[idx + 1]?.focus();
                    }, 0);
                  }
                  // ⬅ Backspace
                  if (e.key === "Backspace") {
                    if (item.type === "image") {
                      // sadece görselse özel silme işlemi
                      e.preventDefault();

                      const newList = [...contentList];
                      newList.splice(idx, 1);
                      setContentList(newList);

                      // 🔄 focus'u bir sonraki veya önceki öğeye taşı
                      setTimeout(() => {
                        // Önce bir sonraki elemana bak
                        const nextItem = newList[idx];
                        if (nextItem) {
                          if (nextItem.type === "image") {
                            const nextImg = document.querySelector(
                              `[data-img-idx="${idx}"]`
                            ) as HTMLElement;
                            if (nextImg) nextImg.focus();
                          } else {
                            textRefs.current[idx]?.focus();
                          }
                        } else {
                          // Eğer sonraki yoksa bir önceki elemana geç
                          const prevItem = newList[idx - 1];
                          if (prevItem) {
                            if (prevItem.type === "image") {
                              const prevImg = document.querySelector(
                                `[data-img-idx="${idx - 1}"]`
                              ) as HTMLElement;
                              if (prevImg) prevImg.focus();
                            } else {
                              textRefs.current[idx - 1]?.focus();
                            }
                          }
                        }
                      }, 0);
                    } else if (item.type === "paragraph") {
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

                          // Önceki öğe image ise → sadece bu textarea'yı sil, image'ye focuslan
                          if (newContent[idx - 1].type === "image") {
                            newContent.splice(idx, 1); // sadece textareayı sil
                            setContentList(newContent);
                            adjustAllHeights();
                            setTimeout(() => {
                              const prevImg = document.querySelector(
                                `[data-img-idx="${idx - 1}"]`
                              ) as HTMLElement;
                              // önce mevcut input'u blur et
                              if (prevImg) target.blur();
                              // sonra image'ye focuslan
                              prevImg?.focus();
                              setFocusedIndex(idx - 1);
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
                  }
                }}
                data-img-idx={idx}
              >
                {item.type === "image" ? (
                  (() => {
                    const size = imageSizes[item.id] || "medium";
                    return (
                      <div
                        ref={(el) => (imageRefs.current[idx] = el)}
                        className={`w-full ${
                          size === "large"
                            ? "h-full"
                            : size === "medium"
                            ? "h-100"
                            : "h-80"
                        } flex relative focus:outline-none focus-visible:outline-none focus:ring-0 focus:border-none`}
                        tabIndex={0}
                      >
                        {item.content ? (
                          <>
                            {/* Content Image*/}
                            <img
                              src={item.content}
                              alt="uploaded"
                              className={`w-full h-full rounded-lg pointer-events-none focus:outline-none ${
                                size === "large"
                                  ? "object-contain"
                                  : size === "medium"
                                  ? "object-cover"
                                  : "object-contain"
                              } `}
                            />
                            {/* Toolbar: sadece focus olduğunda görünür */}
                            {focusedIndex === idx && (
                              <div
                                className={`absolute top-2 right-2 bg-white/90 backdrop-blur-sm shadow-md rounded-lg flex items-center gap-2 px-3 py-2 z-10`}
                              >
                                <button
                                  className="cursor-pointer"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setImageSizes((prev) => ({
                                      ...prev,
                                      [item.id]: "medium",
                                    }));
                                  }}
                                >
                                  <BsCardImage
                                    size={24}
                                    className={`transition-all ${
                                      size === "medium"
                                        ? "text-blue-800"
                                        : "text-gray-500"
                                    }`}
                                  />
                                </button>
                                <button
                                  className="cursor-pointer"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setImageSizes((prev) => ({
                                      ...prev,
                                      [item.id]: "large",
                                    }));
                                  }}
                                >
                                  <BsFileImage
                                    size={24}
                                    className={`transition-all ${
                                      size === "large"
                                        ? "text-blue-800"
                                        : "text-gray-500"
                                    }`}
                                  />
                                </button>
                                <button
                                  className="cursor-pointer"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setImageSizes((prev) => ({
                                      ...prev,
                                      [item.id]: "small",
                                    }));
                                  }}
                                >
                                  <MdOutlineImage
                                    size={24}
                                    className={`transition-all ${
                                      size === "small"
                                        ? "text-blue-800"
                                        : "text-gray-500"
                                    }`}
                                  />
                                </button>
                              </div>
                            )}
                          </>
                        ) : (
                          <span className="text-gray-400">
                            Görsel seçilmedi
                          </span>
                        )}
                      </div>
                    );
                  })()
                ) : (
                  <div className="relative w-full">
                    {/* Paragraph Textarea */}
                    <textarea
                      ref={(el) => (textRefs.current[idx] = el)}
                      value={item.content}
                      placeholder={
                        clickedIndex !== idx && focusedIndex === idx
                          ? idx === 0
                            ? "Bu paragraf içerik açıklaması olarak gösterilecektir..."
                            : "Paragraf ekle..."
                          : ""
                      }
                      className={`w-full placeholder-gray-400 focus:outline-none resize-none overflow-hidden text-base text-gray-300 leading-relaxed roboto ${
                        focusedIndex === idx && item.content === ""
                          ? "pl-10"
                          : "pl-0"
                      } pr-8`}
                      rows={1}
                      onFocus={() => setFocusedIndex(idx)}
                      onBlur={() => setFocusedIndex(null)}
                      onInput={(e) => {
                        const target = e.target as HTMLTextAreaElement;
                        const newContent = [...contentList];
                        newContent[idx].content = target.value;
                        setContentList(newContent);
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
                      }}
                    />
                    <button className={`absolute right-0 top-1 `}>
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
