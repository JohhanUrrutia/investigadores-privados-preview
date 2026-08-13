"use client";

import { useEffect, useState } from "react";
import styles from "./formularios.module.css";
import ConfirmModal from "@/components/admin/ConfirmModal";
import {
  getSubmissions,
  markAsRead,
  deleteSubmission,
} from "@/lib/submissionsStore";

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleString("es-CL", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  } catch {
    return iso;
  }
}

export default function FormulariosAdminPage() {
  const [submissions, setSubmissions] = useState(null);
  const [openId, setOpenId] = useState(null);
  const [pendingDelete, setPendingDelete] = useState(null);

  useEffect(() => {
    getSubmissions().then(setSubmissions);
  }, []);

  function toggleOpen(submission) {
    const willOpen = openId !== submission.id;
    setOpenId(willOpen ? submission.id : null);
    if (willOpen && !submission.read) {
      markAsRead(submission.id).then(setSubmissions);
    }
  }

  function confirmDelete() {
    if (!pendingDelete) return;
    deleteSubmission(pendingDelete.id).then(setSubmissions);
    setPendingDelete(null);
    if (openId === pendingDelete.id) setOpenId(null);
  }

  if (submissions === null) return null;

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Formularios de contacto</h1>
        <p className={styles.lead}>
          Revisa y gestiona los mensajes enviados desde el formulario de
          contacto del sitio.
        </p>
      </div>

      {submissions.length === 0 ? (
        <div className={styles.empty}>SIN FORMULARIOS.</div>
      ) : (
        <div className={styles.list}>
          {submissions.map((s) => (
            <div
              key={s.id}
              className={`${styles.item} ${!s.read ? styles.itemUnread : ""}`}
            >
              <div className={styles.top} onClick={() => toggleOpen(s)}>
                <div className={styles.who}>
                  <span className={styles.name}>
                    {!s.read && <span className={styles.dot} aria-hidden="true" />}
                    {s.name || "Sin nombre"}
                  </span>
                  <span className={styles.email}>{s.email}</span>
                </div>
                <div className={styles.meta}>
                  {s.service && <span className={styles.service}>{s.service}</span>}
                  <span>{formatDate(s.createdAt)}</span>
                </div>
              </div>

              {openId === s.id && (
                <div className={styles.body}>
                  {s.phone && <p className={styles.phone}>Tel: {s.phone}</p>}
                  <p className={styles.message}>{s.message}</p>
                  <div className={styles.actions}>
                    <a href={`mailto:${s.email}`} className={styles.replyBtn}>
                      Responder por correo
                    </a>
                    <button
                      type="button"
                      className={styles.deleteBtn}
                      onClick={() => setPendingDelete(s)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <ConfirmModal
        open={!!pendingDelete}
        title="¿Desea continuar?"
        message="Esta acción eliminará definitivamente este formulario de contacto."
        confirmLabel="Eliminar"
        danger
        onConfirm={confirmDelete}
        onCancel={() => setPendingDelete(null)}
      />
    </div>
  );
}
